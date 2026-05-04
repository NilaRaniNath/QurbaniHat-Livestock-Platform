import React from 'react';
import Marquee from 'react-fast-marquee';



const qurbaniTips= [
  {
    "id": 1,
    "title": "How to identify a healthy animal"
  },
  {
    "id": 2,
    "title": "Ways to verify the animal's age"
  },
  {
    "id": 3,
    "title": "Essential preparations before going to the market"
  },
  {
    "id": 4,
    "title": "Guide to proper animal feeding and care"
  },
  {
    "id": 5,
    "title": "Waste management and environmental protection"
  },
  {
    "id": 6,
    "title": "Proper methods for meat preservation"
  }
];

const QurbaniTips = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={80}>
                {qurbaniTips.map((n)=> (
                    <span key={n.id}>{n.title}</span>
                ))}
            </Marquee>
            
        </div>
    );
};

export default QurbaniTips;