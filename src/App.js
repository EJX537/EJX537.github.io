import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';

import TheAppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

import { useViewport } from './contextWarper'

function App() {
  const { isMobile, height } = useViewport()

  return (
    <div className="app">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(16, 1fr)",
          gap: 0,
          gridTemplateRows: "auto",
          gridTemplateAreas: 
            `"header header header header header header header header header header header header header header header header"
            "${ isMobile ? 'main' : '.' } main main main main main main main main main main main ${ isMobile ? 'main' : 'sidebar' } ${ isMobile ? 'main' : 'sidebar' } ${ isMobile ? 'main' : 'sidebar' } ${ isMobile ? 'main' : '.' }"`
        }}
      >
        <Box sx={{ gridArea: "header" }}>
          <Toolbar/>
          <TheAppBar/>
        </Box>
        <Box
          sx={{ gridArea: "main" }}
          display="flex"
          justifyContent="center"
          >
          <Main/>
        </Box>
        <Card sx={{ gridArea: "sidebar" }}>
          { isMobile?  <div/> : <SideBar/> }
        </Card>
      </Box>
      <Box
        sx={{ bgcolor: "warning.dark" }}
        bottom="0"
        width="100%"
      >
      </Box>
    </div>
  );
}

export default App;
