import React from 'react';
import Page from './Page';
import AboutPageContent from '../pages/About/PageContent';
import AboutSidebarDetails from '../pages/About/AboutSidebarDetails';

const About = () => {
  return (
    <>
      <Page
        content={<AboutPageContent />}
        dataTabName={'Personal-Info'}
        sidebarDetails={<AboutSidebarDetails />}
        sidebarName={'personal-Info'}
      />
    </>
  );
};

export default About;
