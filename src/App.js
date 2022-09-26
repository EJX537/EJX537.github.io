import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import TheAppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

import { useViewport } from './contextWarper'

function App() {
  const { isMobile } = useViewport()

  return (
    <div className="app">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          gridTemplateRows: "auto",
          gridTemplateAreas: 
            `"header header header header"
            "main main main ${ isMobile ? 'main' : 'main' }"
            "footer footer footer footer"`
        }}
      >
        <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>
          <Toolbar/>
          <TheAppBar/>
        </Box>
        <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>
          <Main/>
        </Box>
        <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>
          { isMobile? <SideBar/> : <div/> }
        </Box>
        <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
      </Box>
    </div>
  );
}

export default App;
