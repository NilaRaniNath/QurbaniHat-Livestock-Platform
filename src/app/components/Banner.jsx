"use client";
import { useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
    });
  }, []);

  return (
    <div 
      data-aos="fade-up" 
      className="relative bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/471/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] min-h-[60vh] md:min-h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-2xl shadow-2xl overflow-hidden mt-6 group"
    >
      
      
      <div className="absolute inset-0 bg-gradient-to-red from-black/80 via-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full text-center md:text-left text-white">
        
        
        <h1 
          data-aos="fade-right" 
          data-aos-delay="200"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-red-500 drop-shadow-md">QurbaniHat</span> <br className="hidden sm:block" /> 
          <span className="text-purple-900">Livestock Booking</span>
        </h1>

       
        <p 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="text-base sm:text-lg md:text-2xl mb-10 max-w-2xl mx-auto md:mx-0 text-purple-700 font-medium leading-relaxed"
        >
          Experience a hassle-free sacrifice with the healthiest local and exotic breeds. Your trust, our commitment.
        </p>

       
        <div 
          data-aos="zoom-in" 
          data-aos-delay="600"
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-5"
        >
          <Link href="/all-animals">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Browse All Animals
            </Button>
          </Link>
          
          
        </div>
        
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-red from-red-600 to-transparent opacity-70"></div>
    </div>
  );
};

export default Banner;