import React from 'react';
import Button from '@mui/material/Button';



const Botton = ({children},props) => {
  console.log(props)
  return (
   <Button variant={props.variant} sx={{color: 'white'}} >{children}</Button>
  )
}

export default Botton
