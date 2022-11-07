import React from "react";

import { useViewport } from '../contextWarper'

import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function MaxWidthDialog() {
  const { isPermit, setPermit } = useViewport()

  const handleClose = () => {
    setPermit(false);
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth={'md'}
        open={isPermit}
        onClose={handleClose}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Private project
          </Typography>
          </Toolbar>
        <DialogContent>
          <DialogContentText>
            Files for this project is private. If you would like to look at the source code email me at
            <span> </span>
            <a rel="noopener noreferrer" component="a" href="mailto:ejxie@ucsc.edu">ejxie@ucsc.edu</a>
            .
          </DialogContentText>
        <DialogContentText>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
