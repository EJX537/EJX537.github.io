import React from 'react';
import Projects from "./Projects";

import { useViewport } from '../contextWarper'

function SideBar () {
    const { width, height, isMobile } = useViewport()

    return (
        <div
            sx={{
                'position': 'relative',
                '& ul': {padding: 0},
          }}
        >
            { isMobile ? <div/> : <Projects/> }
        </div>
    );
};

export default SideBar;