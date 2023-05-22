import React, { useEffect, useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import DetailsIcon from "../../components/icons/DetailsIcon";
import FileIcon from "../../components/icons/FileIcon";
import AboutContent from "../About/AboutContent";
import StarIcon from "../../components/icons/StarIcon";
import CloseIcon from "../../components/icons/CloseIcon";
import ProjectCard from "./ProjectCard";
import { ProjectRepo } from "../../interfaces/Projects";
import Loader from "../../components/loader/Loader";

const ProjectContent = () => {
  const [Projects, setProjects] = useState<ProjectRepo>([]);
  const [isLoading, setIsLoading] = useState(false);
  const GetProjects = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.github.com/users/prabhat2373/repos"
    );
    const data = response?.json();
    data
      .then((data) => {
        setIsLoading(false);
        setProjects(data?.reverse());
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };
  useEffect(() => {
    GetProjects();
  }, []);
  console.log("pro", Projects);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-11">
        <>
          {isLoading ? (
            <div className="h-[65vh] w-full grid col-span-full">
              <div className="w-full h-full flex  justify-center items-center flex-col">
                <Loader />
              </div>
            </div>
          ) : (
            <>
              {Projects?.map((element) => {
                return (
                  <ProjectCard
                    name={element?.name}
                    description={element?.description}
                    subhead={element?.language}
                  />
                );
              }) ?? (
                <>
                  {" "}
                  <div className="h-screen">
                    <h1>No Projects Found</h1>
                  </div>
                </>
              )}
            </>
          )}
        </>
      </div>
    </>
  );
};

export default ProjectContent;
