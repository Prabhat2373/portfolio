import React from 'react';
import projectImg from '../../assets/project logo.jpg';

const ProjectCard = ({
  name,
  subhead,
  description,
}: {
  name: string | undefined;
  subhead: string | undefined;
  description: string | undefined;
}) => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-hero-blue font-semibold pb-3">
            {name} <span className="sub-head text-text-main">// {subhead}</span>
          </h1>
        </div>
        <div className="">
          <div className="image">
            <img
              className="w-full h-[150px]"
              src={projectImg}
              alt="project demo image"
            />
          </div>
          <div className="project-content bg-bg-secondary text-text-main p-8">
            <p>{description}</p>
            <div className="pt-5">
              <button className="bg-border-main  rounded-lg px-4 py-3 text-white hover:bg-text-main transition-all duration-300">
                view-project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
