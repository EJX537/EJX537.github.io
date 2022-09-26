import React, { useState } from "react";
import Box from '@mui/material/Box';
import { CopyBlock, dracula } from "react-code-blocks";
import sample from "./codeblock";

const Main = () => {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
      <Box className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
        <CopyBlock
          language="go"
          text={`v := Vertex{X: 1, Y: 2}`}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        />
      </Box>
  );
};

export default Main;