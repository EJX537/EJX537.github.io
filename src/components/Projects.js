import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useViewport } from '../contextWarper';

import projectContent from '../assests/Projects.json';
const projects = [];

for (const project in projectContent) {
    projects.push(project);
}
function Projects() {
    const { isMobile, width, isOpen, setOpen,
            isProject, setProject, setFile } = useViewport();
    const handleDrawerToggle = () => {
        if (isMobile) setOpen(!isOpen);
    };
    const handleClick = (name) => {
        setProject(name);
        setFile("README")
    };
    return (
        <Box
            sx={{ width: isMobile ? width : 1 }}
            role="presentation"
            onClick={ handleDrawerToggle }
        >
            <List>
                {projects.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton key={text + 1}
                            disabled = {isProject === text}
                            onClick={ () => handleClick(text) }
                        >
                            <ListItemText
                                key={text + 1}
                                primary={text}
                                align="center"
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Projects;
