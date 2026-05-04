import Image from "next/image";
import Banner from "./components/Banner";
import Tips from "./components/Tips";
import FeaturedAnimals from "./components/FeaturedAnimals";

export default function Home() {
  return (
   <div>
     <Banner></Banner>

     <FeaturedAnimals></FeaturedAnimals>
    <Tips></Tips>
   </div>
  );
}
