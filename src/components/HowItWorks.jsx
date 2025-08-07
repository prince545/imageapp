import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);

  const steps = [
    {
      title: "Describe Your Vision",
      subtext: "Type a phrase, sentence, or paragraph that describes the image you want to create.",
      icon: "📝"
    },
    {
      title: "Watch the Magic",
      subtext: "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
      icon: "✨"
    },
    {
      title: "Download & Share",
      subtext: "Instantly download your creation or share it with the world directly from our platform.",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const timers = steps.map((_, index) => 
      setTimeout(() => {
        setVisibleSteps(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, (index + 1) * 500)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform Words Into Stunning Images
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-700 ease-out transform ${
                visibleSteps[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.subtext}
                  </p>
                </div>
                <div className="flex-shrink-0 text-4xl">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
