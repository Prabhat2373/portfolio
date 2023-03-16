import React from 'react';
import ProjectContent from './ProjectContent';
import Page from '../../components/Page';

const ProjectIndex = () => {
  return (
    <Page
      content={<ProjectContent />}
      dataTabName={'projects'}
      sidebarDetails={'project name'}
      sidebarName={'project Name'}
    />
  );
};

export default ProjectIndex;
