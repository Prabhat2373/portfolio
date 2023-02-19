import React from "react";
import CodeIcon from "../components/icons/CodeIcon";
import PersonalInfoIcon from "../components/icons/PersonalInfoIcon";
import HobbiesIcon from "../components/icons/HobbiesIcon";
import FileIcon from "../components/icons/FileIcon";

const About = () => {
  return (
    <>
      <section className="grid grid-flow-col grid-cols-12 border border-border-main">
        <div className="grid grid-flow-col col-span-2 border border-border-main">
          <div className="about-sidebar border border-border-main">
            <div className="flex gap-9 flex-col justify-center items-center pt-4">
              <CodeIcon className="cursor-pointer" />
              <PersonalInfoIcon className="cursor-pointer" />
              <HobbiesIcon className="cursor-pointer" />
            </div>
          </div>
          <div className="grid border col-span-4 border-border-main">
            <div className="grid">
              <details className="text-white">
                <summary className="border-b-2 border-border-main px-4 py-3">personal-info</summary>
                <div className="pt-4">
                  <div>
                    <details id="bio-details">
                      <summary className="summary h-[25px] px-4 py-3">
                        <span
                          style={{
                            display: "flex",
                            position: "relative",
                            top: "-20px",
                            left: "18px",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <FileIcon /> Bio
                        </span>
                      </summary>
                      {/* <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati repellat nam
                      </div> */}
                    </details>
                  </div>
                  <div>
                    <details id="interestDetails">
                      <summary className="summary h-[25px] px-4 py-3">
                        <span
                          style={{
                            display: "flex",
                            position: "relative",
                            top: "-20px",
                            left: "18px",
                            alignItems: "center",
                            gap: "6px",
                          }}
                          className="text-text-main"
                        >
                          {" "}
                          <FileIcon color={"#43D9AD"} />Interests
                        </span>
                      </summary>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati repellat nam
                      </div>
                    </details>
                  </div>
                  <div>
                    <details id="educationDetails">
                      <summary className="summary h-[25px] px-4 py-3">
                        <span
                          style={{
                            display: "flex",
                            position: "relative",
                            top: "-20px",
                            left: "18px",
                            alignItems: "center",
                            gap: "6px",
                          }}
                          className="text-text-main"
                        >
                          <FileIcon color={"#3A49A4"} /> education
                        </span>
                      </summary>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati repellat nam
                      </div>
                    </details>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="grid col-span-5 border border-border-main">
          <div className="">
            <div className="top">

            </div>
            <div className="numbers">
              <div className="text-text-main flex flex-col absolute px-10 py-4">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-5 border border-border-main"></div>
      </section>
    </>
  );
};

export default About;
