import React, { Children, useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import MacWindow from "./windows/MacWindow";
import Github from "./windows/Github";
import Note from "./windows/Note";
import Resume from "./windows/Resume";
import Spotify from "./windows/Spotify";
import Cli from "./windows/Cli";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    calender: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Navbar />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github
          windowName="github"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
    </main>
  );
};

export default App;
