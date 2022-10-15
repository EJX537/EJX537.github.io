import React from "react";

import { useViewport } from '../contextWarper'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MaxWidthDialog() {
  const { isAbout, setAbout } = useViewport()

  const handleClose = () => {
    setAbout(false);
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth={'md'}
        open={isAbout}
        onClose={handleClose}
      >
        <DialogTitle>About me</DialogTitle>
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
