import { Rnd } from "react-rnd";
import "./MacWindow.scss";

const MacWindow = ({ children, height, width, windowName, setWindowState }) => {
  return (
    <Rnd
      default={{
        width: width || "40vw",
        height: height || "40vh",
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setWindowState((state) => ({
                  ...state,
                  [windowName]: false,
                }))
              }
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>sagarrai - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
