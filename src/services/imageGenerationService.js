// Image Generation Service
// This service handles communication with AI image generation APIs

class ImageGenerationService {
  constructor() {
    this.openaiBaseURL = import.meta.env.VITE_API_BASE_URL || 'https://api.openai.com/v1';
    this.geminiBaseURL = import.meta.env.VITE_GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta';
    this.openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    this.geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  }

  // Generate image using available AI services
  async generateImage(prompt, options = {}) {
    try {
      // Try OpenAI first if API key is available
      if (this.openaiApiKey) {
        return await this.generateWithOpenAI(prompt, options);
      }

      // Try Gemini if API key is available
      if (this.geminiApiKey) {
        return await this.generateWithGemini(prompt);
      }

      // Fallback to mock service for demo purposes
      return await this.generateMockImage(prompt, options);
    } catch (error) {
      console.error('Image generation error:', error);
      throw error;
    }
  }

  // Generate image using OpenAI DALL-E
  async generateWithOpenAI(prompt, options = {}) {
    try {
      const {
        size = '1024x1024',
        style = 'vivid',
        quality = 'standard',
        model = 'dall-e-3'
      } = options;

      const response = await fetch(`${this.openaiBaseURL}/images/generations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.openaiApiKey}`
        },
        body: JSON.stringify({
          model: model,
          prompt: prompt,
          n: 1,
          size: size,
          quality: quality,
          style: style
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API request failed: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        imageUrl: data.data[0].url,
        revisedPrompt: data.data[0].revised_prompt,
        provider: 'openai'
      };
    } catch (error) {
      console.error('OpenAI generation error:', error);
      throw error;
    }
  }

  // Generate image using Google Gemini
  async generateWithGemini(prompt) {
    try {
      // Use the correct Gemini model for image generation
      const model = 'gemini-2.0-flash-exp-image-generation';

      const response = await fetch(`${this.geminiBaseURL}/models/${model}:generateContent?key=${this.geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate an image of: ${prompt}`
            }]
          }],
          generationConfig: {
            responseModalities: ["Text", "Image"]
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API request failed: ${response.status}`);
      }

      const data = await response.json();

      // Extract image from response
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const content = data.candidates[0].content;
        const imagePart = content.parts.find(part => part.inlineData);

        if (imagePart) {
          return {
            success: true,
            imageUrl: `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`,
            revisedPrompt: prompt,
            provider: 'gemini'
          };
        }
      }

      throw new Error('No image generated from Gemini');
    } catch (error) {
      console.error('Gemini generation error:', error);
      throw error;
    }
  }

  // Mock service for demonstration when no API key is provided
  async generateMockImage(prompt, options = {}) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate a mock image URL based on prompt keywords
    const promptLower = prompt.toLowerCase();

    if (promptLower.includes('nature') || promptLower.includes('forest') || promptLower.includes('tree')) {
      // Use nature-themed mock images
    } else if (promptLower.includes('city') || promptLower.includes('building') || promptLower.includes('urban')) {
      // Use city-themed mock images
    } else if (promptLower.includes('space') || promptLower.includes('star') || promptLower.includes('galaxy')) {
      // Use space-themed mock images
    } else if (promptLower.includes('ocean') || promptLower.includes('water') || promptLower.includes('beach')) {
      // Use ocean-themed mock images
    } else if (promptLower.includes('portrait') || promptLower.includes('person') || promptLower.includes('face')) {
      // Use portrait-themed mock images
    }

    // Using Lorem Picsum for realistic mock images
    const mockImageId = Math.floor(Math.random() * 1000) + 400;
    const size = options.size || '1024x1024';

    return {
      success: true,
      imageUrl: `https://picsum.photos/id/${mockImageId}/${size.split('x')[0]}/${size.split('x')[1]}`,
      revisedPrompt: prompt,
      isMock: true,
      provider: 'mock'
    };
  }

  // Get available styles
  getAvailableStyles() {
    return [
      { id: 'vivid', name: 'Vivid', description: 'Highly detailed and vibrant images' },
      { id: 'natural', name: 'Natural', description: 'More realistic and natural looking images' }
    ];
  }

  // Get available sizes
  getAvailableSizes() {
    return [
      { id: '1024x1024', name: 'Square (1024×1024)', description: 'Perfect for social media posts' },
      { id: '1024x1792', name: 'Portrait (1024×1792)', description: 'Tall images for stories' },
      { id: '1792x1024', name: 'Landscape (1792×1024)', description: 'Wide images for banners' }
    ];
  }

  // Validate prompt
  validatePrompt(prompt) {
    if (!prompt || prompt.trim().length === 0) {
      return { valid: false, error: 'Prompt cannot be empty' };
    }

    if (prompt.length > 1000) {
      return { valid: false, error: 'Prompt is too long (max 1000 characters)' };
    }

    // Check for inappropriate content (basic check)
    const inappropriateWords = ['violence', 'hate', 'explicit', 'nsfw'];
    const lowerPrompt = prompt.toLowerCase();

    for (const word of inappropriateWords) {
      if (lowerPrompt.includes(word)) {
        return { valid: false, error: 'Prompt contains inappropriate content' };
      }
    }

    return { valid: true };
  }
}

export const imageGenerationService = new ImageGenerationService();
