import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Titulo from "./Header";
import MyCard from "./MyCard";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Titulo titulo={"Adopta un Perrito"} />
      <div className="divcards">
        <MyCard
          imagen={
            "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg"
          }
          nombre={"Firulais"}
          descripcion={"Perrito muy amable y educado"}
        />
        <MyCard
          imagen={
            "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          nombre={"Cachupin"}
          descripcion={"Perrito inteligente y autónomo"}
        />
        <MyCard
          imagen={
            "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          nombre={"Carlotta"}
          descripcion={"Excelente compañera de juegos"}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
