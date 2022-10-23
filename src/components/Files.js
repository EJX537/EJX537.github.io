import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import projectContent from '../assests/Projects.json';
import { useViewport } from '../contextWarper';
import './Files.css';

export default function FilesExplorTabs() {
    const [ value, setValue ] = useState(0);
    const [ activeTab, setActiveTab ] = useState(["README"]);
    const { setFile, isProject } = useViewport()
    const handleChange = (_event, newValue) => {
        setValue(newValue);
        setFile(activeTab[newValue]);
    };
    useEffect(() => {
        if (isProject != null) {
            const temp = ["README"];
            setValue(0);
            for (const file in projectContent[isProject].Files) {
                temp.push(projectContent[isProject].Files[file]);
            }
            setActiveTab(temp);
        } else {
            setValue(0);
            setActiveTab(["README"]);

        }
    }, [isProject])

    return (
        <Box sx={{bgcolor: 'background.paper'}}>
            <Tabs
                text-transfrom="none"
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
