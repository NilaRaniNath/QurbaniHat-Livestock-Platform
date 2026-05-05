"use client";

import React, { useState, useEffect } from 'react';
import AnimalCard from '../components/AnimalCard';

const AllAnimalsPage = () => {
    const [animals, setAnimals] = useState([]);
    const [sortedAnimals, setSortedAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://qurbani-hat-livestock-platform.vercel.app/data.json')
            .then(res => res.json())
            .then(data => {
                setAnimals(data);
                setSortedAnimals(data); 
                setLoading(false);
            });
    }, []);

   
    const handleSort = (e) => {
        const order = e.target.value;
        let sortedArray = [...animals];

        if (order === 'lowToHigh') {
            sortedArray.sort((a, b) => a.price - b.price);
        } else if (order === 'highToLow') {
            sortedArray.sort((a, b) => b.price - a.price);
        }
        
        setSortedAnimals(sortedArray);
    };

    if (loading) return <p className="p-8 text-center">Loading Animals...</p>;

    return (
        <div className="container mx-auto p-4">
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold'>All Animals</h1>
                
                
                <div className="flex items-center gap-2">
                    <label className="font-medium">Sort by Price:</label>
                    <select 
                        onChange={handleSort}
                        className='select select-bordered border-gray-300 p-2 rounded-md'
                    >
                        <option value="default">Default</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {sortedAnimals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};

export default AllAnimalsPage;