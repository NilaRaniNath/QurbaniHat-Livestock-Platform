import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/471/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] h-[55vh] md:h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl overflow-hidden mt-4">
      
    
      <div className="w-full h-full bg-black/60 flex items-center">
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center md:text-left text-white">
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            QurbaniHat <br className="hidden sm:block" /> 
            Livestock Booking Platform
          </h1>

          
          <p className="text-sm sm:text-base md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-gray-300">
            Choose from the healthiest local and exotic breeds for a meaningful sacrifice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/all-animals">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 rounded-full shadow-lg">
                Browse All Animals
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;