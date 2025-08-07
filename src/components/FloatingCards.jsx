// components/FloatingCards.jsx
import React from "react";
import { motion } from "framer-motion";

const FloatingCards = () => {
  const floatingElements = [
    { id: 1, size: "w-20 h-20", top: "10%", left: "15%", delay: 0, color: "bg-blue-400/20" },
    { id: 2, size: "w-16 h-16", top: "20%", left: "80%", delay: 0.5, color: "bg-purple-400/20" },
    { id: 3, size: "w-12 h-12", top: "60%", left: "10%", delay: 1, color: "bg-pink-400/20" },
    { id: 4, size: "w-24 h-24", top: "70%", left: "85%", delay: 1.5, color: "bg-indigo-400/20" },
    { id: 5, size: "w-14 h-14", top: "40%", left: "50%", delay: 2, color: "bg-cyan-400/20" },
    { id: 6, size: "w-18 h-18", top: "85%", left: "30%", delay: 2.5, color: "bg-emerald-400/20" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full backdrop-blur-sm`}
          style={{
            top: element.top,
            left: element.left,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
      
      {/* Subtle sparkle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCards;
