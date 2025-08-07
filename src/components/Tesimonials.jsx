import React from 'react';
import { testimonialsData, assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-4xl font-bold text-white mb-6'>What Our Users Say</h1>

      <p className='text-lg text-gray-300 max-w-2xl text-center mb-8'>
        "Imagify has transformed the way I create visuals. The AI-generated images are stunning and save me so much time!"
      </p>

      <div className='flex flex-wrap justify-center gap-16'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-gray-800 p-6 rounded-lg max-w-sm text-white'>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-12 h-12 rounded-full mb-2'
            />
            <p className='font-semibold'>{testimonial.name}</p>
            <p className='text-sm text-gray-400 mb-2'>{testimonial.role}</p>
            <div className='flex mb-2'>
              {Array(testimonial.stars)
                .fill()
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.rating_star}
                    alt="rating"
                    className="w-4 h-4 mr-1"
                  />
                ))}
            </div>
            <p className='text-gray-200'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
