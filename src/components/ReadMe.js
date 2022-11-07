import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';
import Images from './Images';
import { useViewport } from '../contextWarper';

import projectContent from '../assests/Projects.json';
export default function MediaCard() {
  const { height, isProject, setPermit } = useViewport();
  const toGit = () => {
    window.open(projectContent[isProject].MainPage);
  };
  const noPermit = () => {
    setPermit(true);
  };
  return (
    <Card sx={{minHeight: height - 140}}>
      {Images[projectContent[isProject].README.Project_Name].data === "false" ? <div/> :
        <CardMedia
          component="img"
          height="280"
          image={Images[projectContent[isProject].README.Project_Name].path}
          alt={Images[projectContent[isProject].README.Project_Name].data}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      }
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
          onClick={ projectContent[isProject].MainPages === "" ? noPermit : toGit }
          >
          { projectContent[isProject].MainPages === "" ? <LockIcon/> : <GitHubIcon /> }
        </IconButton>
      </CardActions>
    </Card>
  );
}
