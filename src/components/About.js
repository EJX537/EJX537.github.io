import React from "react";

import { useViewport } from '../contextWarper'

import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import About_content from '../assests/About.json';

export default function MaxWidthDialog() {
  const { isAbout, setMe, setAbout } = useViewport()

  const handleClose = () => {
    setAbout(false);
  };
  const handleResume = () => {
    setMe(true);
    setAbout(false);
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
            {About_content.Title}
          </Typography>
          <Button autoFocus onClick={handleResume}>
              Resume
            </Button>
          </Toolbar>
        <DialogContent>
          <DialogContentText>
            {About_content.Content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
