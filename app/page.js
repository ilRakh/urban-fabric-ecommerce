import SliceCards from "./component/slice-cards";
import "./globals.css"
import { buzos } from "./Productos";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SliceCards product={buzos} title="HIGHLIGHTS" />
    </>
  );
}
