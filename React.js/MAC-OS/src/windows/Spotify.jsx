import MacWindow from "./MacWindow";
import "./spotify.scss";
const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      width="25vw"
    >
      <div className="spotify">
        <iframe
          data-testid="embed-iframe"
          style={{ "border-radius": "12px" }}
          src="https://open.spotify.com/embed/playlist/05tQuKpy2rvDLPnw8F1H1Y?utm_source=generator&theme=0&si=0ad3ada4dd594286"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
