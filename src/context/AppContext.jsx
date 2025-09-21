import React, { createContext, useState } from "react";

// 1) Create the context
export const AppContext = createContext();

// 2) Create the Provider component
export const AppContextProvider = ({ children }) => {
  // User state
  const [user, setUser] = useState(null);

  // Image generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [generationHistory, setGenerationHistory] = useState([]);
  const [generationError, setGenerationError] = useState(null);

  // User credits
  const [userCredits, setUserCredits] = useState(10); // Default 10 credits for demo

  // Generation settings
  const [generationSettings, setGenerationSettings] = useState({
    size: '1024x1024',
    style: 'vivid',
    quality: 'standard'
  });

  // Add image to history
  const addToHistory = (imageData) => {
    const newHistory = [imageData, ...generationHistory].slice(0, 20); // Keep last 20
    setGenerationHistory(newHistory);
    localStorage.setItem('imagify_history', JSON.stringify(newHistory));
  };

  // Clear generation error
  const clearError = () => {
    setGenerationError(null);
  };

  // Check if user has enough credits
  const hasEnoughCredits = () => {
    return userCredits > 0;
  };

  // Deduct credits after successful generation
  const deductCredits = (amount = 1) => {
    setUserCredits(prev => Math.max(0, prev - amount));
  };

  // Add credits
  const addCredits = (amount) => {
    setUserCredits(prev => prev + amount);
  };

  // Load history from localStorage on mount
  React.useEffect(() => {
    const savedHistory = localStorage.getItem('imagify_history');
    if (savedHistory) {
      try {
        setGenerationHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading history:', error);
      }
    }
  }, []);

  const value = {
    // User
    user,
    setUser,

    // Image generation
    isGenerating,
    setIsGenerating,
    generatedImage,
    setGeneratedImage,
    generationHistory,
    generationError,
    setGenerationError,
    clearError,
    addToHistory,

    // Credits
    userCredits,
    setUserCredits,
    hasEnoughCredits,
    deductCredits,
    addCredits,

    // Settings
    generationSettings,
    setGenerationSettings
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
