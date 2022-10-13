import React, { useState } from "react";
import Box from '@mui/material/Box';
import { CopyBlock, dracula } from "react-code-blocks";
import sample from "./codeblock";

import { useViewport } from '../contextWarper'
import { Toolbar, Typography } from "@mui/material";

const Main = () => {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const { isMobile, width, isOpen, setOpen } = useViewport();
  return (
      <Box 
        style={{ width: isMobile ? '100%' : '95%' }}
        >
        <Toolbar>
          <Typography>
           Shit Code
          </Typography>
        </Toolbar>
        <Box style={{ width: isMobile ? '100%' : '95%' }}>
          <CopyBlock 
            sx={{ height: 100000 }}
            language={language}
            text={languageDemo}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </Box>
        <br/>
      <Box sx={{bgcolor: "primary.main"}}>
        <Typography sx={{ wordBreak: "break-word" }} >
        123123123123123123123123123123123123123123123123123123
        </Typography>
      </Box>
      </Box>
  );
};

export default Main;