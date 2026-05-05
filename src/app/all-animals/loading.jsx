import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4">
          
            <div className="relative flex items-center justify-center">
               
                <div className="absolute w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                
                
                <div className="text-blue-600 text-4xl animate-pulse">
                    <ImSpinner9 />
                </div>
            </div>
            
          
            <div className="mt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Loading .......
                </h2>
               
            </div>

         
            <div className="mt-10 w-full max-w-xs bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div className="bg-blue-600 h-full w-full rounded-full animate-shimmer"></div>
            </div>

           
            <div className="mt-4 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                Please Stand By
            </div>
        </div>
    );
};

export default Loading;