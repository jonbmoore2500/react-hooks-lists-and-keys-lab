import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techsSpans = technologies.map((tech) => {
    return <span key={tech + 'Key'}>{tech}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techsSpans}
      </div>
    </div>
  );
}

export default ProjectItem;
