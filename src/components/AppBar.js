import React from 'react';
import { useViewport } from '../use-viewport'

function AppBar() {
    const { isMobile, height, width } = useViewport()
    return (
      <div>
        <h1> {isMobile ? 'Mobile' : 'Desktop'} </h1>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
    );
  }
  
  export default AppBar;