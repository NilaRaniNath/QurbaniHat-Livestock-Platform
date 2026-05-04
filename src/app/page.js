import Image from "next/image";
import Banner from "./components/Banner";
import Tips from "./components/Tips";
import FeaturedAnimals from "./components/FeaturedAnimals";
import QurbaniTips from "./components/QurbaniTips";

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <QurbaniTips></QurbaniTips>

     <FeaturedAnimals></FeaturedAnimals>
    <Tips></Tips>
   </div>
  );
}
