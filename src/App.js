import { useContext } from "react";
import { Context } from "./Context";
import { Box, createTheme } from "@mui/material";
import "../src/App.css";
import Header from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  const contexDatos = useContext(Context);
  console.log(contexDatos.colores.grayDark);

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: `${contexDatos.colores.grayDark}`, height: "100vh" }}>
        <Header />
        <Home/>
        
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
//
