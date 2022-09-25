import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useViewport } from '../contextWarper'

const useStyles = makeStyles(theme => ({
    footer: {
      display:"flex",
      justifyContent:"center",
    }
  }));

function TheDrawer() {
    const { isOpen, setOpen } = useViewport()
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    }
    return (
        <Box onClick={handleDrawerToggle}>
            <CssBaseline />
            <Toolbar className={classes.footer}>
                <Typography variant="h4" align="center"
                >
                    Projects
                </Typography>
            </Toolbar>
            <Divider />
            <List>
            </List>
      </Box>
    );
}

export default TheDrawer;