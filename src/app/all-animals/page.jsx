import React from 'react';
import AnimalCard from '../components/AnimalCard';

const AllAnimalsPage =async () => {
     const res= await fetch('https://qurbani-hat-livestock-platform.vercel.app/data.json')
    const animals = await res.json();
    // console.log(animals)
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {animals.map(animal=> <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>
        </div>
    );
};

export default AllAnimalsPage;