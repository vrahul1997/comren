import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Comren from "./components/Comren";
import { useRef } from "react";

export default function Home() {
  const comrenAbout = useRef(null);

  return (
    <div>
      <Navbar />
      <Map />
      <Comren />
    </div>
  );
}
