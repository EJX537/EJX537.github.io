import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@mui/material/Drawer";

import { useViewport } from '../contextWarper'
import Projects from "./Projects";

const useStyles = makeStyles(theme => ({
    header: {
      display:"flex",
      justifyContent:"center",
    }
}));

function TheDrawer() {
    const { width, isOpen, setOpen } = useViewport();
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };
    return (
        <Drawer
            anchor='right'
            open={isOpen}
            onClose={handleDrawerToggle}
        >
            <CssBaseline/>
            <Toolbar className={classes.header}>
                <Typography variant="h5" align="center">
                    Projects
                </Typography>
            </Toolbar>
            <Divider/>
            <Projects/>
        </Drawer>
    );
}

export default TheDrawer;