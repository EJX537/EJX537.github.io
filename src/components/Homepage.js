import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useViewport } from '../contextWarper';

function HomePage() {
    const { height } = useViewport();
    return (
    <Card sx={{minHeight: height - 140}}>
      <CardMedia
        component="img"
        height="280"
        image={require("../assests/logo512.png")}
        alt="React Logo"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Welcome to Eric's Portfolio Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I am currently a 3rd year student at the University ofSanta Cruz studying Computer Engineering.
          Built ontop of React and MUI, this website is a demonstration of my skills as a programmer.
          In addition to my experience in working with JavaScript, some other languages I have worked with is
          Python and C.
        </Typography>
      </CardContent>
    </Card>
    )
}

export default HomePage;