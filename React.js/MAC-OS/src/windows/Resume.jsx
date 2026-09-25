import "./resume.scss";
import MacWindow from "./MacWindow";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="resume-window">
        <embed src="/Sagar_Dummy_Resume.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  );
};
export default Resume;
