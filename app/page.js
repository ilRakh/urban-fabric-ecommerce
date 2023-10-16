import "./globals.css"
import { buzos, zapas } from "./Productos";
import Navbar from "@/components/navbar/navbar";
import CarouselCardsSize from "@/components/carousel-cards/carousel-cards-size";
import CarouselImages from "@/components/carousel-image/carousel-image";
import CarouselImages2 from "@/components/carousel-image/carousel-images2";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <CarouselImages/> */}
      <CarouselImages2/>
      <CarouselCardsSize product={zapas} title="HIGHLIGHTS"/>
      <CarouselCardsSize product={buzos} title="HOODIES"/>
    </>
  );
}
