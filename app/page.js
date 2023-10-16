import "./globals.css"
import { buzos, zapas } from "./Productos";
import Navbar from "@/components/navbar/navbar";
import CarouselCardsSize from "@/components/carousel-cards/carousel-cards-size";
import CarouselImages from "@/components/carousel-image/carousel-image";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselImages/>
      <CarouselCardsSize product={zapas} title="HIGHLIGHTS"/>
      <CarouselCardsSize product={buzos} title="HOODIES"/>
    </>
  );
}
