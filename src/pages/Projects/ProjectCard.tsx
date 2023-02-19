import React from 'react'
import projectImg from '../../assets/project logo.jpg'

const ProjectCard = () => {
    return (
        <>
            <div>
                <div><h1 className='text-hero-blue font-semibold'>Project Name</h1></div>
                <div className="">
                    <div className="image">
                        <img src={projectImg} alt="project demo image" />
                    </div>
                    <div className="project-content bg-bg-secondary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, temporibus sunt? Architecto

                        </p>
                        <button className='bg-border-main'>view-project</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard