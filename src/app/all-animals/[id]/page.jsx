import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdPricetags } from 'react-icons/io';

const AnimalDetailsPage = async ({params}) => {
    const {id} = await params;
     const res= await fetch("https://qurbani-hat-livestock-platform.vercel.app/data.json")
    const animals = await res.json();
    const animal= animals.find(a=> a.id == id)
    // console.log(animal)

    return (
       <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="flex flex-col md:flex-row">
          
         
          <div className="md:w-1/2 relative h-64 md:h-auto">
           <Image
                               src={animal.image}
                               alt={animal.name}
                              fill
                              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                               className="object-cover rounded-xl"
                               ></Image> 
            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {animal.category}
            </div>
          </div>

          
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{animal.name}</h1>
              <p className="text-gray-500 text-lg mb-6 flex items-center">
                <span className="mr-2">📍</span> {animal.location}
              </p>

             
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase">Breed</p>
                  <p className="font-semibold text-gray-700">{animal.breed}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase">Weight</p>
                  <p className="font-semibold text-gray-700">{animal.weight} KG</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase">Age</p>
                  <p className="font-semibold text-gray-700">{animal.age} Years</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase">Type</p>
                  <p className="font-semibold text-gray-700">{animal.type}</p>
                </div>
              </div>

             
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {animal.description}
                </p>
              </div>
            </div>

           
            <div className="border-t pt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Price</p>
                <p className="text-2xl font-bold text-green-700">৳ {animal.price.toLocaleString()}</p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default AnimalDetailsPage;