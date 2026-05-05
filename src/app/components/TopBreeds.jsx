import Image from "next/image";

const TopBreeds = async () => {
  const res = await fetch('https://qurbani-hat-livestock-platform.vercel.app/data.json', {
    next: { revalidate: 3600 } 
  });
  const breeds = await res.json();
  const topBreeds = breeds.slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Top Breeds
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topBreeds.map((breed) => (
            <div 
              key={breed.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
             
              <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-xl">
               <Image
                                   src={breed.image}
                                   alt={breed.name}
                                  fill
                                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                                   className="object-cover rounded-xl"
                                   ></Image>
              </div>

          
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {breed.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {breed.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;