import { WhiteSection } from './Containers';
import { projects } from '../data/data.json';
import { FaArrowLeft, FaGithubAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <WhiteSection textAlign="center" paddingLR="0 2.5rem">
      <h1>Development</h1>
      <h2>Projects that I actually completed</h2>
      <div id="projects">
        {projects.map((data, key) => {
          return (
            <ProjectCard
              key={key}
              ImgUrl={data.img}
              Name={data.name}
              Description={data.desc}
              GitUrl={data.giturl}
              LiveUrl={data.liveurl}
            />
          );
        })}
        <span id="swipe">
          <FaArrowLeft />
          swipe
        </span>
      </div>
    </WhiteSection>
  );
}

function ProjectCard(props) {
  return (
    <div id="projectCard">
      <img id="projectImage" src={props.ImgUrl} alt="" />

      <div className="projectText">
        <h5>{props.Name}</h5>
        <p>{props.Description}</p>
      </div>
      <div className="tools">
        <u>{props.Tools}</u>
      </div>
      <div className="projectOptions">
        <a target="_blank" href={props.GitUrl}>
          <FaGithubAlt id="github-alt" />
        </a>
        <a target="_blank" id="veiwLive" href={props.LiveUrl}>
          Veiw
        </a>
      </div>
    </div>
  );
}
