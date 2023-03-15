import React, { useEffect, useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import DetailsIcon from '../../components/icons/DetailsIcon';
import FileIcon from '../../components/icons/FileIcon';
import AboutContent from '../About/AboutContent';
import StarIcon from '../../components/icons/StarIcon';
import CloseIcon from '../../components/icons/CloseIcon';
import ProjectCard from './ProjectCard';
import { ProjectRepo } from '../../interfaces/Projects';

const ProjectContent = () => {
  const [Projects, setProjects] = useState<ProjectRepo>([]);
  const GetProjects = async () => {
    const response = await fetch(
      'https://api.github.com/users/prabhat2373/repos'
    );
    const data = response?.json();
    data
      .then((data) => {
        setProjects(data?.reverse());
      })
      .catch((err) => {
        console.log('errr', err);
      });
  };
  useEffect(() => {
    GetProjects();
  }, []);
  console.log('pro', Projects);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-11">
        {Projects?.map((element) => {
          return (
            <ProjectCard
              name={element?.name}
              description={element?.description}
              subhead={element?.language}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectContent;
