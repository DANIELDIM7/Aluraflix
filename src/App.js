import { useContext } from "react";
import { Context } from "./Context";
import { Box, createTheme } from "@mui/material";
import "../src/App.css";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import PlayVideo from "./pages/PlayVideo";

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
      <Box sx={{ bgcolor: `${contexDatos.colores.grayDark}` }}>
        <Header />
        {/* <Home/> */}

        <PlayVideo/>
        
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
//
