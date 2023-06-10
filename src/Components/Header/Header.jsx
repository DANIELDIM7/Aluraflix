import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Context } from "../../Context";
import { useContext } from "react";
import Logo from "../../img/logoAlternativo.png";
import { Link } from "react-router-dom";
// import Botton from "../Boton/Boton";
// import Button from '@mui/material/Button';

const Header = (props) => {
  const contexDatos = useContext(Context);
  const { inicial } = props;
  return (
    <>
      {inicial ? (
        <Box sx={{  display:{sx:'flex'} }}>
          <AppBar
            position="static"
            sx={{
              bgcolor: `${contexDatos.colores.black}`,
              height: "94px",
              justifyContent: "center",
              borderBottom: ` 1px solid ${contexDatos.colores.bluePrimary}`
            }}
          >
            <Toolbar>
              
              <Box component={Link} to={'/'} sx={{ flexGrow: 1, justifyContent:{xs:'center'} }}>
                <img src={Logo} alt="" />
              </Box>
            
              

            
                <Button
                component={Link}
                to={"/nuevoVideo"}
                  variant="outlined"l
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontFamily: "Roboto",
                    display: { xs: 'none', md: 'block' },
                    
                  }}
                >
                  Nuevo Video
                </Button>
              
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              bgcolor: `${contexDatos.colores.black}`,
              height: "94px",
              justifyContent: "center",
              borderBottom: ` 1px solid ${contexDatos.colores.bluePrimary}`,
            }}
          >
            <Toolbar>
              <Box component={Link} to={'/'} sx={{ flexGrow: 1 }}>
                <img src={Logo} alt="" />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default Header;
