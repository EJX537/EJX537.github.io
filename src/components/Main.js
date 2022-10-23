import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { CopyBlock, dracula } from "react-code-blocks";
import { makeStyles } from "@material-ui/core/styles";
import sample from "./codeblock";
import AppBar from "@material-ui/core/AppBar";

import { useViewport } from '../contextWarper'
import { Toolbar, Typography } from "@mui/material";

import About from './About';
import Resume from './Resume';
import FilesExplorTabs from "./Files";

const Main = () => {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const { isMobile, isFile } = useViewport();

  useEffect(() => {
    if (isFile != null) {
      console.log(isFile);
    }
}, [isFile])

  return (
    <Box 
      style={{ width: isMobile ? '100%' : '95%' }}
    >
      <FilesExplorTabs/>
      <Box >
        <CopyBlock 
          language={language}
          text={languageDemo}
          showLineNumbers={false}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br/>
        <Typography sx={{ wordBreak: "break-word" }} >
          123123123123123123123123123123123123123123123123123123
        </Typography>
      </Box>
      <About/>
      <Resume/>
    </Box>
  );
};

export default Main;