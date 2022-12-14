import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useViewport } from '../contextWarper'
import TheDrawer from './Drawer'

function TheAppBar() {
    const { setAbout, setFile, width, isOpen, setOpen, setProject, isProject, isMobile } = useViewport()
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    }
    const toGit = () => {
      window.open("https://github.com/EJX537");
    };
    const toLink = () => {
      window.open("https://www.linkedin.com/in/ericjxie/");
    };
    const handleClickAbout = () => {
      setAbout(true);
    };
    const handleToHome = () => {
      setProject(null);
      setFile("README")
    };
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Button sx={{ color: '#fff' }} onClick={handleToHome}>
            <Typography fontWeight="bold">
              {isMobile ? "" : "Eric's Portfolio Website"} {isMobile ? '' : isProject ? '-' : ''} {isProject}
            </Typography>
              </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button sx={{ color: '#fff' }} onClick={handleClickAbout}>
              About
            </Button>
            <IconButton
              size="large"
              color="inherit"
              onClick={toGit}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={toLink}
            >
              <LinkedInIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={isOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: width,
              },
            }}
          >
            <TheDrawer/>
          </Drawer>
        </Box>
      </Box>
    );
}
  
export default TheAppBar;
