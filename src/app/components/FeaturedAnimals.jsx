import React from 'react';
import AnimalCard from './AnimalCard';

const FeaturedAnimals = async() => {
    const res= await fetch('')
    const animals = await res.json();
    // console.log(animals)
    const topAnimals = animals.slice(0, 4);
    // console.log(topAnimals)
    return (
        <div>
            <h1 className='font-bold text-2xl mt-5'>Featured animals </h1>
            <div className='grid grid-cols-4 gap-4'>
                {topAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>
        </div>
    );
};

export default FeaturedAnimals;