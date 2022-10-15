import {React, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Document, Page } from "react-pdf";

import { useViewport } from '../contextWarper'

import file from './sample.pdf'

export default function FullScreenDialog() {
  const { isMe, setMe } = useViewport()

  const handleClose = () => {
    setMe(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isMe}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Resume
            </Typography>
          </Toolbar>
        </AppBar>
        <Document file={file}>
            <Page pageNumber={1} />
        </Document>
      </Dialog>
    </div>
  );
}
