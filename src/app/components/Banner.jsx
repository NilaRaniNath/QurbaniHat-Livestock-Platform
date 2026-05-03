import { Button } from "@heroui/react";
import Link from "next/link";


const Banner = () => {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/471/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mb-10 mx-auto px-6 text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 max-w-2xl">
           QurbaniHat <br></br> Livestock Booking Platform
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Choose from the healthiest local and exotic breeds for a meaningful sacrifice.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Browse All Animals
              </Button>
            </Link>

            {/* <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;