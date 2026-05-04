import React from 'react';
import AnimalCard from './AnimalCard';

const FeaturedAnimals = async() => {
    const res= await fetch('https://qurbani-hat-livestock-platform.vercel.app/data.json')
    const animals = await res.json();
    // console.log(animals)
    const topAnimals = animals.slice(0, 4);
    // console.log(topAnimals)
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-2xl my-5'>Featured animals </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {topAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>
        </div>
    );
};

export default FeaturedAnimals;