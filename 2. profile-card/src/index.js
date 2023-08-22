import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
  {
    name: "HTML+CSS",
    level: "intermediate",
    color: "pink",
  },
  {
    name: "JavaScript",
    level: "advanced",
    color: "orange",
  },
  {
    name: "React",
    level: "beginner",
    color: "green",
  },
  {
    name: "Java",
    level: "beginner",
    color: "yellow",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Iris Xu" description="CST student" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="iris.png" alt="Iris Xu" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillData.map((skill) => (
        <Skill name={skill.name} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

// Skill function receives props object as a parameter
function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
