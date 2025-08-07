import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FloatingCards from "../components/FloatingCards";
import MagicalCards from "../components/MagicalCards";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "./PricingSection";
import Tesimonials from "../components/Tesimonials";


export default function Home() {
  return (
    <div className="min-h-screen bg-outerBlue p-6 relative">
      {/* Magical floating cards background */}
      <div className="absolute inset-0 z-0">
        <FloatingCards />
      </div>

      {/* Main content overlay */}
      <div className="relative z-10 bg-diag-white-inner w-full min-h-screen max-w-6xl mx-auto rounded-3xl shadow-xl p-10 flex flex-col backdrop-blur-sm bg-opacity-95">
        {/* Navbar inside white gradient box */}
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="flex flex-col flex-grow items-center justify-center text-center w-full py-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Generate images <br /> from text
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Transform your ideas into stunning visuals <br /> with the power of AI.
          </p>

          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your prompt"
              className="w-full p-3 pr-24 rounded-lg border-2 border-blue-300 shadow-[4px_4px_8px_rgba(0,0,255,0.3)] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-[1.02]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Generate
            </button>
          </div>
        </section>

        {/* Features & Why Choose Us Section */}
        <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-4">
                      <div className="text-center mb-12">

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Features */}
            {/* Lightning Fast */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h4>
              <p className="text-gray-600">Generate high-quality images in seconds, not hours</p>
            </div>

            {/* Style Control */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Style Control</h4>
              <p className="text-gray-600">Multiple art styles to match your vision perfectly</p>
            </div>

            {/* HD Quality */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012 2m0 4v2m0-6V4m6 6V4m0 2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012 2m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">HD Quality</h4>
              <p className="text-gray-600">Crisp, high-resolution images ready for any use</p>
            </div>

            {/* Commercial Use */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Commercial Use</h4>
              <p className="text-gray-600">All generated images come with full usage rights</p>
            </div>
          </div>
        </div>
        </div>
 <section id="magical-cards" className="w-full">
          <MagicalCards />
        </section>
        
        {/* Pricing Section */}<section id="pricing-section" className="w-full mt-16">
          <PricingSection />
        </section>
        <section id="testimonials" className="w-full py-20 from-indigo-50 to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
        Trusted by Thousands
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Users Say</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Don't just take our word for it - hear from our creative community
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-2 transition-transform">
        <div className="flex items-center mb-6">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Sarah Johnson" 
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
            <p className="text-purple-600 text-sm">Graphic Designer</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic">
          "This AI generator has completely transformed my design workflow. I can now create client concepts in minutes instead of hours. The quality is consistently impressive!"
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-2 transition-transform">
        <div className="flex items-center mb-6">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Michael Chen" 
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900">Michael Chen</h4>
            <p className="text-purple-600 text-sm">Marketing Director</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic">
          "Our social media engagement has doubled since we started using these AI-generated images. The ability to quickly test different visual concepts is game-changing."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-2 transition-transform">
        <div className="flex items-center mb-6">
          <img 
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Emma Rodriguez" 
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900">Emma Rodriguez</h4>
            <p className="text-purple-600 text-sm">Content Creator</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p className="text-gray-600 italic">
          "As a solo creator, this tool gives me access to professional-quality visuals I could never produce myself. It's like having an entire design team at my fingertips."
        </p>
      </div>
    </div>

    
        
      
    
  </div>
</section>
        
        {/* How It Works Section */}
        <section className="w-full mt-16">
          <HowItWorks />
        </section>

      
      
    </div>
  );
}