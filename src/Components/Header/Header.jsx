
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Context } from "../../Context";
import { useContext } from "react";
import Logo from '../../img/logoAlternativo.png'
// import Botton from "../Boton/Boton";
// import Button from '@mui/material/Button';

const Header = () => {
   const contexDatos = useContext(Context) 

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{bgcolor: `${contexDatos.colores.black}`, height:'94px', justifyContent:'center', borderBottom:` 1px solid ${contexDatos.colores.bluePrimary}`}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="" />
            </Box>
          <Button variant="outlined" sx={{borderColor: 'white', color: 'white', fontFamily: 'Roboto'}}>Nuevo Video</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
