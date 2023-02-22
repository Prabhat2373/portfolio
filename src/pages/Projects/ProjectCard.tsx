import React from 'react'
import projectImg from '../../assets/project logo.jpg'

const ProjectCard = () => {
    return (
        <>
            <div>
                <div><h1 className='text-hero-blue font-semibold pb-3'>Project Name <span className="sub-head text-text-main">// subhead</span></h1></div>
                <div className="">
                    <div className="image">
                        <img className='w-full h-[150px]' src={projectImg} alt="project demo image" />
                    </div>
                    <div className="project-content bg-bg-secondary text-text-main p-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        </p>
                       <div className='pt-5'>
                       <button className='bg-border-main  rounded-lg px-4 py-3 text-white hover:bg-text-main transition-all duration-300'>view-project</button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard