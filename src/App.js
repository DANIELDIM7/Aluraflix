import { useContext } from "react";
import { Context } from "./Context";
import { Box, createTheme } from "@mui/material";
import "../src/App.css";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import PlayVideo from "./pages/PlayVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewVideo from "./pages/FormNuevoVideo/NewVideo";
import NewEquipo from "./pages/FormNuevoEquipo/NewEquipo";
import EditarEquipo from "./pages/FormNuevoEquipo/EditarEquipo/EditarEquipo";

function App() {
  const contexDatos = useContext(Context);
  console.log(contexDatos.colores.grayDark);

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
    palette: {
      mode: 'dark',
    },

  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: 'black' }}>
          <Header inicial={contexDatos.inicio}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/videos/:id" element={<PlayVideo/>}/>
            <Route path="/nuevoVideo" element={<NewVideo/>}/>
            <Route path="/nuevoEquipo" element={<NewEquipo/>}/>
            <Route path="/editarEquipo/:id" element={<EditarEquipo/>}/>
          </Routes>

          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
//
