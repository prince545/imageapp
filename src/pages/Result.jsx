import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useImageGeneration } from '../hooks/useImageGeneration';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Result = () => {
  const { generatedImage, generationHistory, userCredits } = useContext(AppContext);
  const { downloadImage } = useImageGeneration();

  const handleDownload = async () => {
    if (generatedImage) {
      const filename = `imagify-${generatedImage.prompt.slice(0, 30).replace(/\s+/g, '-')}.png`;
      await downloadImage(generatedImage.imageUrl, filename);
    }
  };

  const handleNewGeneration = () => {
    // Navigate back to home to generate new image
    window.location.href = '/';
  };

  if (!generatedImage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Generated Image</h2>
          <p className="text-gray-600 mb-6">Generate an image first to see your results here.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Generate Image
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src={assets.logo} alt="Imagify" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">Imagify</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Credits: <span className="font-semibold text-blue-600">{userCredits}</span>
              </div>
              <Link
                to="/buy"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Buy Credits
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-medium">Image generated successfully!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Generated Image */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Generated Image</h2>
                <p className="text-gray-600 text-sm mt-1">Based on: "{generatedImage.prompt}"</p>
              </div>

              <div className="p-6">
                <div className="relative group">
                  <img
                    src={generatedImage.imageUrl}
                    alt={generatedImage.prompt}
                    className="w-full h-auto rounded-lg shadow-md"
                  />

                  {/* Download button overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <button
                      onClick={handleDownload}
                      className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                {/* Image Details */}
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Size:</span> {generatedImage.settings?.size || '1024x1024'}
                  </div>
                  <div>
                    <span className="font-medium">Style:</span> {generatedImage.settings?.style || 'vivid'}
                  </div>
                  <div>
                    <span className="font-medium">Generated:</span> {new Date(generatedImage.timestamp).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">Credits Used:</span> 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Image</span>
                </button>

                <button
                  onClick={handleNewGeneration}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Generate New</span>
                </button>
              </div>
            </div>

            {/* Generation History */}
            {generationHistory.length > 1 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Generations</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {generationHistory.slice(1, 6).map((item) => (
                    <div key={item.id} className="flex space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <img
                        src={item.imageUrl}
                        alt={item.prompt}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.prompt}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Tips for Better Results</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Be specific with your descriptions</li>
                <li>• Include style keywords (photorealistic, cartoon, artistic)</li>
                <li>• Mention colors, lighting, and mood</li>
                <li>• Try different prompts for variations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
