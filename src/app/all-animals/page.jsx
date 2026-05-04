import React from 'react';
import AnimalCard from '../components/AnimalCard';

const AllAnimalsPage =async () => {
     const res= await fetch('http://localhost:3000/data.json')
    const animals = await res.json();
    console.log(animals)
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Animals</h1>
            <div className='grid grid-cols-4 gap-5'>
                {animals.map(animal=> <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
            </div>
        </div>
    );
};

export default AllAnimalsPage;