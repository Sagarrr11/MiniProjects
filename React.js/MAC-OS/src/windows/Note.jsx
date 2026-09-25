import { useEffect, useState } from "react";
import Markdown, { MarkdownAsync } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./note.scss";
import MacWindow from "./MacWindow";
const Note = ({ windowName, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        <SyntaxHighlighter language="typeScript" style={atelierDuneDark}>
          {markdown}
        </SyntaxHighlighter>
      </div>
    </MacWindow>
  );
};

export default Note;
