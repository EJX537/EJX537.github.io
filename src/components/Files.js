import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import projectContent from '../assests/Projects.json';
import { useViewport } from '../contextWarper'

export default function FilesExplorTabs() {
    const [ value, setValue ] = useState(0);
    const [ activeTab, setActiveTab ] = useState(["READ ME"]);
    const { setFile, isProject } = useViewport()
    const handleChange = (_event, newValue) => {
        setValue(newValue);
        setFile(activeTab[newValue]);
    };

    useEffect(() => {
        if (isProject != null) {
            const temp = ["READ ME"]
            for (const file in projectContent[isProject].Files) {
                temp.push(projectContent[isProject].Files[file]);
            }
            setActiveTab(temp);
        }
    }, [isProject])

    return (
        <Box sx={{bgcolor: 'background.paper'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {activeTab.map((text, index) => (
                    <Tab label={text} key={index}/>
                ))}
            </Tabs>
        </Box>
    )
}
