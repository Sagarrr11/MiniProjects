import githubData from "../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = ({
  data = { id: 1, image: "", desc: "", tags: [], repoLink: "", demoLink: "" },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="userPic" />
      <h1>{data.title}</h1>
      <p className="desc">{data.desc}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p key={tag} className="tag">
            {tag}
          </p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        <a href={data.demoLink}>Demo Link</a>
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
