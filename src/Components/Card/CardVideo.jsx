import React from 'react'
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import ReactPlayer from 'react-player';

const CardVideo = () => {
  return (
    <Card>
      <CardMedia >
      <ReactPlayer
        url='https://youtu.be/EB4vWLzfVcI'
        controls
        
        
        />
      </CardMedia>
       
    </Card>
  )
}

export default CardVideo