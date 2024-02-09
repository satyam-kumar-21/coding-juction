import React from 'react';
import TestimonialCard from './TestinomialCard';


const Testimonials = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-400">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">What Students Say About Us</h1>
      <div className="flex flex-wrap justify-center">
        
        <TestimonialCard
          name="Jane Smith"
          imageSrc="https://imgs.search.brave.com/9B4B0npB9UuaVucFOq-IuOvQqL0rTMXvnH6OTjIVX0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw"
          testimonial="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <TestimonialCard
          name="David Johnson"
          imageSrc="https://imgs.search.brave.com/9B4B0npB9UuaVucFOq-IuOvQqL0rTMXvnH6OTjIVX0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw"
          testimonial="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <TestimonialCard
          name="Emily Brown"
          imageSrc="https://imgs.search.brave.com/9B4B0npB9UuaVucFOq-IuOvQqL0rTMXvnH6OTjIVX0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw"
          testimonial="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
         <TestimonialCard
          name="Emily Brown"
          imageSrc="https://imgs.search.brave.com/9B4B0npB9UuaVucFOq-IuOvQqL0rTMXvnH6OTjIVX0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw"
          testimonial="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <TestimonialCard
          name="Emily Brown"
          imageSrc="https://imgs.search.brave.com/9B4B0npB9UuaVucFOq-IuOvQqL0rTMXvnH6OTjIVX0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw"
          testimonial="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </div>
  );
};

export default Testimonials;
