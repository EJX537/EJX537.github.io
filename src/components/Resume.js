import { React } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Document, Page, pdfjs } from "react-pdf";
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useViewport } from '../contextWarper'

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

export default function FullScreenDialog() {
  const { isMe, setMe, width, isMobile} = useViewport()
  const handleClose = () => {
    setMe(false);
  };

  return (
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
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            href={require('../assests/Resume.pdf')}
            download="resume.pdf"
          >
            <DownloadIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div
        display='flex'
      >
        <Document
            file={require('../assests/Resume.pdf')}
            options={options}
            loading=''
            >
            <Page
              pageNumber={1}
              width={isMobile ? width : width * .9}
              />
          </Document>
      </div>
    </Dialog>
  );
}
