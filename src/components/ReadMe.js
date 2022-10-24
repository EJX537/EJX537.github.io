import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

import Images from './Images';
import { useViewport } from '../contextWarper';

import projectContent from '../assests/Projects.json';
export default function MediaCard() {
  const { height, isProject } = useViewport();
  const toGit = () => {
    window.open(projectContent[isProject].MainPage);
  };
  return (
    <Card sx={{minHeight: height - 140}}>
      <CardMedia
        component="img"
        height="280"
        image={Images[projectContent[isProject].README.Project_Name].path}
        alt={Images[projectContent[isProject].README.Project_Name].data}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectContent[isProject].README.Project_Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectContent[isProject].README.Body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          onClick={toGit}
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
