import React from "react";
import FileIcon from "../../components/icons/FileIcon";
import { useNavigate, useParams, Params } from "react-router-dom";

const AboutSidebarDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-4">
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
          <h1
            className="pl-5 pb-3 cursor-pointer"
            onClick={() => {
              // window.history.pushState({ id: '1' }, 'Page', '?tab=info');
              navigate("/about?tab=info");
            }}
          >
            PersonalInfo.tsx
          </h1>
        </details>
      </div>
      <div>
        <details id="educationDetails">
          <summary className="summary h-[25px] px-4 py-4">
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
              <FileIcon color={"#3A49A4"} /> experience
            </span>
          </summary>
          <div>
            <h1
              className="pl-5 pb-3 cursor-pointer"
              onClick={() => navigate("/about?tab=experience")}
            >
              Experience.tsx
            </h1>
          </div>
        </details>
      </div>
    </>
  );
};

export default AboutSidebarDetails;
