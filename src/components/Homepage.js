import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useViewport } from '../contextWarper';

function HomePage() {
    const { height } = useViewport();
    return (
        <Card sx={{minHeight: height - 140}}>
      <CardMedia
        component="img"
        height="280"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SOMETHING ABOUT ME
        </Typography>
        <Typography variant="body2" color="text.secondary">
        CODING CODING CODING CODING CODING CODING CODING CODING CODING
        CODING CODING CODING CODING CODING CODING CODING CODING CODING
        CODING CODING CODING CODING CODING CODING CODING CODING CODING
        CODING CODING CODING CODING CODING CODING CODING CODING CODING
        </Typography>
      </CardContent>
    </Card>
    )
}

export default HomePage;