import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useViewport } from '../contextWarper';
import Homepage_content from '../assests/Homepage.json';
const image = require('../assests/Logo.png');

function HomePage() {
    const { height } = useViewport();
    return (
    <Card sx={{minHeight: height - 140}}>
      <CardMedia
        component="img"
        height="280"
        image={image}
        alt={Homepage_content["Image-Data"]}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {Homepage_content["Title"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Homepage_content["Body"]}
        </Typography>
      </CardContent>
    </Card>
    )
}

export default HomePage;