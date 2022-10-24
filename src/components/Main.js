import React, { useState, useEffect, useCallback } from "react";
import Box from '@mui/material/Box';
import { CopyBlock, dracula } from "react-code-blocks";

import { useViewport } from '../contextWarper'

import About from './About';
import Resume from './Resume';
import ReadMe from './ReadMe';
import HomePage from './Homepage';
import FilesExplorTabs from "./Files";

import projectContent from '../assests/Projects.json';

const Main = () => {
  const [ language, setLanguage ] = useState("");
  const [ link, setLink ] = useState("");
  const { isMobile, isFile, isProject } = useViewport();
  const [ text, setText ] = useState("");
  const getNames = useCallback(async() => {
    try {
      const names = await fetch(`${link}`);
      const textData = await names.text();
      return textData;
    } catch (err) {
    }
  }, [link]);
  (async () => {
    const getText = await getNames();
    setText(getText);
  })();
  useEffect(() => {
    if (isFile !== "README" && isProject !== null) {
      getNames();
      setLink(projectContent[isProject].Data[isFile].Link);
      setLanguage(projectContent[isProject].Data[isFile].Language);
    }
  }, [getNames, isFile, isProject])
  return (
    <Box 
      style={{ width: isMobile ? '100%' : '95%' }}
    >
      <FilesExplorTabs/>
      <br/>
      <Box >
        { isProject === null ? <HomePage/> : isFile === "README" ?
          <ReadMe
          /> :
          <CopyBlock 
            language={language}
            text={text}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
        />}
        <br/>
      </Box>
      <About/>
      <Resume/>
    </Box>
  );
};

export default Main;