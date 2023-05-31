import React from "react";
import { Banner } from "../Components/Banner/Banner";
import Carrousel from "../Carrousel/Carrousel";
import { useContext } from "react";
import { Context } from "../Context";


const Home = () => {
  
  const contexDatos = useContext(Context);
  const { equipos, videos} = contexDatos
  

  return (
    <>
      <Banner />
      {equipos.map((equipo) => <Carrousel 
      key={equipos.id}
      datos={equipo}
      videos= {videos.filter((video) => video.categoria === equipo.titulo)}
      />)}
      
      
     
    </>
  );
};

export default Home;
