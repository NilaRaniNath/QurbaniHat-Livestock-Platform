import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/471/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] h-[50vh] md:h-[65vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-2xl shadow-2xl overflow-hidden mt-4">
      
      {/* Overlay: কালো আভা দেওয়া হয়েছে যাতে লেখাগুলো স্পষ্ট বোঝা যায় */}
      <div className="w-full h-full bg-black/60 flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left text-white">
          
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight">
            QurbaniHat <br className="hidden md:block" /> 
            <span className="text-red-400">Livestock Booking</span>
          </h1>

          <p className="text-sm md:text-xl mb-8 max-w-xl text-gray-300 mx-auto md:mx-0 leading-relaxed">
            Choose from the healthiest local and exotic breeds for a meaningful and blessed sacrifice. Quality guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/all-animals">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 shadow-lg transition-transform hover:scale-105"
              >
                Browse All Animals
              </Button>
            </Link>

            <Link href="/signin">
              <Button 
                size="lg"
                variant="bordered"
                className="border-white text-white font-bold rounded-full px-8 hover:bg-white hover:text-black transition-all"
              >
                Join Community
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;