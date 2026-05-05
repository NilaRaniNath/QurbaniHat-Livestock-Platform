
import Banner from "./components/Banner";
import Tips from "./components/Tips";
import FeaturedAnimals from "./components/FeaturedAnimals";
import QurbaniTips from "./components/QurbaniTips";
import TopBreeds from "./components/TopBreeds";


export const metadata = {
  title: "QurbaniHat-Home",
 
};

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <QurbaniTips></QurbaniTips>

     <FeaturedAnimals></FeaturedAnimals>
    <Tips></Tips>
    <TopBreeds></TopBreeds>
   </div>
  );
}
