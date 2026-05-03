import { Card } from "@heroui/react";
import Image from "next/image";


const AnimalCard = ({animal}) => {
    // console.log(animal)
    return (
        <div>
            <Card className="border rounded-xl">
                <div className="relative w-full aspect-square">
                   <Image
                    src={animal.image}
                    alt={animal.name}
                    height={200}
                    width={300}
                    className="object-cover rounded-xl"
                    ></Image> 
                    <p>{animal.price}</p>
                </div>
            </Card>
        </div>
    );
};

export default AnimalCard;