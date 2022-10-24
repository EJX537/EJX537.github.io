import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';

import { useViewport } from '../contextWarper'
import Projects from "./Projects";

const useStyles = makeStyles(theme => ({
    header: {
      display:"flex",
      justifyContent:"center",
    }
}));

function TheDrawer() {
    const { isMobile, isOpen, setOpen } = useViewport();
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };
    return (
        <Drawer
            open={isMobile && isOpen}
            onClose={handleDrawerToggle}
        >
            <CssBaseline/>
            <Toolbar className={classes.header}>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="h5" align="center">
                    Projects
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerToggle}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <Divider/>
            <Projects/>
        </Drawer>
    );
}

export default TheDrawer;