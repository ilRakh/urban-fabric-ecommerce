import "./globals.css"
import { zapas } from "./Productos";
import SliceImage from "@/components/carousel-image/slice-image";
import Navbar from "@/components/navbar/navbar";
import CarouselCardsSize from "@/components/carousel-cards/carousel-cards-size";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <SliceImage/> */}
      <CarouselCardsSize product={zapas} title="HIGHLIGHTS"/>
    </>
  );
}
