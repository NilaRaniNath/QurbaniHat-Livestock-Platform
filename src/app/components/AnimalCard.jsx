import { Avatar, Card, Chip } from "@heroui/react";
import Image from "next/image";

import { IoMdPricetags } from "react-icons/io";


const AnimalCard = ({animal}) => {
    // console.log(animal)
    return (
        <div>
            <Card className="border rounded-xl">
                <div className="relative w-full aspect-square">

                     <Image
                    src={animal.image}
                    alt={animal.name}
                   fill
                   sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                    className="object-cover rounded-xl"
                    ></Image> 
                    
                  </div>
                   
<div className="card-body">
    <h2 className="card-title">
      {animal.name}
    </h2>
    
    {/* <p>{animal.description}</p> */}
    <div className="card-actions justify-end">
      <p className="text-xl flex justify-center"><IoMdPricetags />{animal.price}</p>
      <div variant='outline'className="border rounded-xl p-1 text-white bg-pink-800">{animal.category}</div>
      <button className="badge badge-outline bg-blue-950 text-white">Details</button>
    </div>
  </div>
            </Card>
        </div>
    );
};

export default AnimalCard;