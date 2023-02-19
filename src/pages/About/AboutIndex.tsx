import React from "react";
import Page from "../../components/Page";
import AboutPageContent from "./PageContent";
import AboutSidebarDetails from "./AboutSidebarDetails";

const About = () => {
  return (
    <>
      <Page content={<AboutPageContent />} dataTabName={'Personal-Info'} sidebarDetails={<AboutSidebarDetails />} sidebarName={'personal-Info'} />
    </>
  );
};

export default About;
