import React from 'react';

const ProjectSidebar = () => {
  return (
    <div className="px-5 py-2">
      <div className="flex ">
        <input
          type="checkbox"
          className="w-[20px] accent-text-main bg-transparent"
        />
        <span className="absolute"></span>
        <h2 className="text-text-main">React</h2>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          className="w-[20px] accent-text-main bg-transparent"
        />
        <span className="absolute"></span>
        <h2 className="text-text-main">React</h2>
      </div>
      <div className="flex ">
        <input
          type="checkbox"
          className="w-[20px] accent-text-main bg-transparent"
        />
        <span className="absolute"></span>
        <h2 className="text-text-main">React</h2>
      </div>
    </div>
  );
};

export default ProjectSidebar;
