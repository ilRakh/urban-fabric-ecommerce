import SliceCards from "./component/slice-cards";
import "./globals.css"
import { buzos } from "./Productos";

export default function Home() {
  return (
    <>
      <SliceCards product={buzos} title="HIGHLIGHTS" />
    </>
  );
}
