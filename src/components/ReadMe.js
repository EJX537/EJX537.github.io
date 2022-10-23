import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useViewport } from '../contextWarper';

export default function MediaCard() {
const { height, isMobile } = useViewport();
  return (
    <Card sx={{minHeight: height - 140}}>
      <CardMedia
        component="img"
        height="280"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SOMETHING ABOUT PROJECT
        </Typography>
        <Typography variant="body2" color="text.secondary">
            DYNAMIC README
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
