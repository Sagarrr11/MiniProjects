import "./dock.scss";
const Dock = ({ setWindowState }) => {
  return (
    <footer className="dock">
      <div
        className="icon github"
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
      >
        <img src="/Doc-icons/github.svg" alt="" />
      </div>
      <div
        className="icon note"
        onClick={() => {
          setWindowState((state) => ({ ...state, note: true }));
        }}
      >
        <img src="/Doc-icons/note.svg" alt="" />
      </div>
      <div
        className="icon pdf resume"
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: true }));
        }}
      >
        <img src="/Doc-icons/pdf.svg" alt="" />
      </div>
      <div
        className="icon calender"
        onClick={() => {
          window.open("https://calendar.google.com/calendar/u/0/r", "_blank");
        }}
      >
        <img src="/Doc-icons/calender.svg" alt="" />
      </div>
      <div
        className="icon spotify"
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: true }));
        }}
      >
        <img src="/Doc-icons/spotify.svg" alt="" />
      </div>
      <div
        className="icon mail"
        onClick={() => {
          window.open("mailto:sagarrai@example.com", "_blank");
        }}
      >
        <img src="/Doc-icons/mail.svg" alt="" />
      </div>
      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/sagar-rai-ab51b4385",
            "_blank",
          );
        }}
      >
        <img src="/Doc-icons/link.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
      >
        <img src="/Doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
