import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useViewport } from '../contextWarper'
import TheDrawer from './Drawer'
function TheAppBar() {
    const { isMobile, width, isOpen, setOpen } = useViewport()
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    }
    const toGit = () => {
      window.open("https://github.com/EJX537");
    };
    const toLink = () => {
      window.open("https://www.linkedin.com/in/eric-xie-01a27a227");
    };
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Button sx={{ color: '#fff' }}>
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
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
