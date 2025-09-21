import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { imageGenerationService } from '../services/imageGenerationService';

export const useImageGeneration = () => {
  const {
    isGenerating,
    setIsGenerating,
    generatedImage,
    setGeneratedImage,
    generationError,
    setGenerationError,
    clearError,
    addToHistory,
    hasEnoughCredits,
    deductCredits,
    generationSettings
  } = useContext(AppContext);

  const generateImage = async (prompt) => {
    // Clear any previous errors
    clearError();

    // Validate prompt
    const validation = imageGenerationService.validatePrompt(prompt);
    if (!validation.valid) {
      setGenerationError(validation.error);
      return { success: false, error: validation.error };
    }

    // Check credits
    if (!hasEnoughCredits()) {
      setGenerationError('Insufficient credits. Please purchase more credits to continue.');
      return { success: false, error: 'Insufficient credits' };
    }

    // Start generation
    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const result = await imageGenerationService.generateImage(prompt, generationSettings);

      if (result.success) {
        const imageData = {
          id: Date.now(),
          prompt: prompt,
          imageUrl: result.imageUrl,
          revisedPrompt: result.revisedPrompt,
          settings: { ...generationSettings },
          timestamp: new Date().toISOString(),
          isMock: result.isMock || false
        };

        setGeneratedImage(imageData);
        addToHistory(imageData);
        deductCredits(1); // Deduct 1 credit per generation

        return { success: true, data: imageData };
      } else {
        throw new Error('Generation failed');
      }
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error.message || 'Failed to generate image. Please try again.';
      setGenerationError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (imageUrl, filename = 'generated-image.png') => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      return { success: true };
    } catch (error) {
      console.error('Download error:', error);
      return { success: false, error: 'Failed to download image' };
    }
  };

  return {
    generateImage,
    downloadImage,
    isGenerating,
    generatedImage,
    generationError,
    clearError
  };
};
