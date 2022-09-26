import React from 'react';
import Projects from "./Projects";

import { useViewport } from '../contextWarper'

function SideBar () {
    const { width, height, isMobile } = useViewport()

    return (
        <div
            sx={{
                'position': 'relative',
                'overflow': 'auto',
                '& ul': {padding: 0},
          }}
        >
            { isMobile ? <div> </div> : <Projects/> }
        </div>
    );
};

export default SideBar;