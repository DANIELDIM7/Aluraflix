import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      nombre : "CSS FlexboxFroggy",
      categoria: "Front End",
      url: "https://youtu.be/MXPhyN5t0uQ",
    },
    {
      id: uuid(),
      nombre:"Como utilizar el Display block, inline, inline-block",
      categoria: "Front End",
      url: "https://youtu.be/AG2QssLpQzI",
    },
    {
      id: uuid(),
      nombre:"Back End",
      categoria: "Back End",
      url: "https://youtu.be/Z024LSCMqFk",
    },
    {
      id: uuid(),
      nombre:"Descomplicando Base de Datos",
      categoria: "Back End",
      url: "https://youtu.be/G1cDRqKuxpg",
    },
    {
      id: uuid(),
      nombre:"Banco de Datos MySQL | Contenidos ONE",
      categoria: "Back End",
      url: "https://youtu.be/8J0AoPZMVxA",
    },
    {
      id: uuid(),
      nombre:"Banco de Datos MySQL | Contenidos ONE",
      categoria: "Back End",
      url: "https://youtu.be/8J0AoPZMVxA",
    },
    {
      id: uuid(),
      nombre:"Robot Trading con IA",
      categoria: "Machine Learn",
      url: "https://youtu.be/Y41jImeUYFQ",
    },
    {
      id: uuid(),
      nombre:"Consejos de CSS FlexBox para comenzar",
      categoria: "Front End",
      url: "https://youtu.be/EB4vWLzfVcI",
    },
    {
      id: uuid(),
      nombre:"Accesibilidad Web",
      categoria: "Front End",
      url: "https://youtu.be/ngMOsuZL-XE",
    },
    {
      id: uuid(),
      nombre:"La magia detrás de Java",
      categoria: "Back End",
      url: "https://youtu.be/GrEO8nZzyZM",
    },
    {
      id: uuid(),
      nombre:"¿Qué es la Programación Orientada a Objetos?",
      categoria: "Front End",
      url: "https://youtu.be/Oigen2sjagk",
    },
    {
      id: uuid(),
      nombre:"Spring Framework. ¿Qué es ?",
      categoria: "Back End",
      url: "https://youtu.be/t-iqt1b2qqk",
    },
    {
      id: uuid(),
      nombre:"Cómo usar IA para hacer un traductor de idiomas",
      categoria: "Machine Learn",
      url: "",
    },
    {
      id: uuid(),
      nombre:"¿Qué es scrum?",
      categoria: "Soft Skills",
      url: "https://youtu.be/TttMvhj4uu4",
    },
    {
      id: uuid(),
      nombre:"¿Qué son las metodologias ágiles?",
      categoria: "Soft Skills",
      url: "https://youtu.be/6N3OkLCfK-0",
    },
    {
      id: uuid(),
      nombre:"7 Soft Skills más deseadas por las empresas",
      categoria: "Soft Skills",
      url: "https://youtu.be/YhR7Zp8NUzE",
    },
    {
      id: uuid(),
      nombre:"Como aplicar Dark Mode en tu proyecto",
      categoria: "Frnt End",
      url: "https://youtu.be/MxlxFhzGRV8",
    },
    {
      id: uuid(),
      nombre:"Como mantenerse despierto con IA",
      categoria: "Machine Learn",
      url: "https://youtu.be/yHpAUOmAAd0",
    },
    {
      id: uuid(),
      nombre:"Ventajas de trabajar con TypeScript",
      categoria: "Front End",
      url: "https://youtu.be/bFrhU0hbo00",
    },
    {
      id: uuid(),
      nombre:"De Front End a Back End con Java",
      categoria: "Back End",
      url: "https://youtu.be/3aK3Omo2RrU",
    },
    {
      id: uuid(),
      nombre:"Animando un texto en HTML y CSS",
      categoria: "Front End",
      url: "https://youtu.be/j71g5TiMA-M",
    },
    {
      id: uuid(),
      nombre:"Box Model y Box sizing",
      categoria: "Front End",
      url: "https://youtu.be/ts9qfCKamKg",
    },
  
  ]);
  const [equipos, setEquipos] =useState([
    {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#6BD1FF",
    },
    {
        id: uuid(),
        titulo: "Machine Learn",
        colorPrimario: "#6B5BE2",
    },
    {
        id: uuid(),
        titulo: "Machine Learning",
        colorPrimario: "#FFBA05",
    },
  ])
  const values = {
    videos,
    equipos,
    colores: {
      black: "rgba(0, 0, 0, 0.9)",
      grayDark: "rgba(0, 0, 0, 0.25)",
      grayMedium: "#191919",
      bluePrimary: "#2A7AE4",
    },
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
