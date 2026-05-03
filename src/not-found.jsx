import React from 'react';
import { Link } from "react-router";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
     
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-slate-200 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaExclamationTriangle className="text-6xl text-[#2d4f48] animate-bounce" />
        </div>
      </div>

     
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        Tumi jeta khujcho sheti hoyto onno kothao soraye fela hoyeche othoba link-ti bhul. Ekbar check kore dekhte paro!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="btn bg-[#2d4f48] hover:bg-[#233d37] text-white border-none px-8 flex items-center gap-2"
        >
          <FaArrowLeft size={14} />
          Back to Home
        </Link>
        
        <button 
          onClick={() => window.history.back()} 
          className="btn btn-outline border-[#2d4f48] text-[#2d4f48] hover:bg-[#2d4f48] hover:border-[#2d4f48] px-8"
        >
          Go Back
        </button>
      </div>

    
      <div className="mt-12">
        <div className="badge badge-ghost p-4 text-slate-400">
          Lost in Space? 🚀
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;