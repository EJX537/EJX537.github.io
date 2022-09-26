import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useViewport } from '../contextWarper'
const projects = ['Inbox', 'Starred', 'Send email', 'Drafts'];

function Projects() {
    const { width, isOpen, setOpen } = useViewport();
    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };
    return (
        <Box
            sx={{ width: width }}
            role="presentation"
            onClick={ handleDrawerToggle }
        >
            <List>
                {projects.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} align="center" />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Projects;
