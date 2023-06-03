import React from "react";
import { Banner } from "../Components/Banner/Banner";
import Carrousel from "../Components/Carrousel/Carrousel";
import { useContext,useEffect } from "react";
import { Context } from "../Context";


const Home = () => {

 
  
  const contexDatos = useContext(Context);
  const { equipos, videos} = contexDatos

  useEffect(() => {
    
    contexDatos.setInicio(true)
  });

  

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
