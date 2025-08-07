// components/MagicalCards.jsx
import React from "react";
import { motion } from "framer-motion";

const MagicalCards = () => {
  const cards = [
    { id: 1, name: 'card1.png', delay: 0, title: "Fantasy Landscapes", description: "Breathtaking scenes from imaginary worlds" },
    { id: 2, name: 'card2.png', delay: 0.2, title: "Cyberpunk City", description: "Neon-lit futuristic urban landscapes" },
    { id: 3, name: 'card3.png', delay: 0.4, title: "Portrait Masterpieces", description: "Hyper-realistic AI-generated portraits" },
    { id: 4, name: 'card4.png', delay: 0.6, title: "Animal Adventures", description: "Whimsical animals in creative scenarios" },
    { id: 5, name: 'card6.png', delay: 0.8, title: "Sci-Fi Concepts", description: "Futuristic technology and space exploration" },
    { id: 6, name: 'card5.png', delay: 1.0, title: "Abstract Art", description: "Colorful and thought-provoking compositions" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
          Explore AI Creations
        </h3>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Discover the endless possibilities of AI-generated art across various styles and themes
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            custom={card.delay}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className="relative group"
            style={{ perspective: "1000px" }}
          >
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              
              <div className="relative h-72 overflow-hidden">
                <motion.img 
                  src={`/${card.name}`} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-1">{card.title}</h4>
                  <p className="text-white/80 text-sm">{card.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Popular</span>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Try This Style
                </button>
              </div>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MagicalCards;
