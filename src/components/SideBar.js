import React from 'react';
import Projects from "./Projects";

import { useViewport } from '../contextWarper'

function SideBar () {
    const { width, height, isMobile } = useViewport()

    return (
        <div
        sx={{
            'maxWidth': width >= 550 ? '35%' : '90%',
            'position': 'relative',
            'overflow': 'auto',
            'height': height,
            'width': width,
            '& ul': {padding: 0},
          }}>
            { isMobile ? '' : Projects }
        </div>
    );
};

export default SideBar;