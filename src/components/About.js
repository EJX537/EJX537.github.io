import React from "react";

import { useViewport } from '../contextWarper'

import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';

export default function MaxWidthDialog() {
  const { isAbout, setMe, setAbout } = useViewport()

  const handleClose = () => {
    setAbout(false);
  };
  const handleResume = () => {
    setMe(true);
  }

  return (
    <React.Fragment>
      <Dialog
        maxWidth={'md'}
        open={isAbout}
        onClose={handleClose}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            About me
          </Typography>
          <Button autoFocus onClick={handleResume}>
              Resume
            </Button>
          </Toolbar>
        <DialogContent>
          <DialogContentText>
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
            Hello World Hello World Hello World
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
