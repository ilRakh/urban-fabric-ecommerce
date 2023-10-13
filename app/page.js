import "./globals.css"
import { zapas } from "./Productos";
import SliceImage from "@/components/carousel-image/carousel-image";
import Navbar from "@/components/navbar/navbar";
import CarouselCardsSize from "@/components/carousel-cards/carousel-cards-size";
import CarouselImages from "@/components/carousel-image/carousel-image";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselImages/>
      <CarouselCardsSize product={zapas} title="HIGHLIGHTS"/>
    </>
  );
}
