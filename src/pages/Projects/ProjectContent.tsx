import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DetailsIcon from '../../components/icons/DetailsIcon'
import FileIcon from '../../components/icons/FileIcon'
import AboutContent from '../About/AboutContent'
import StarIcon from '../../components/icons/StarIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import ProjectCard from './ProjectCard'

const ProjectContent = () => {
    return (
        <>
            <div className="grid grid-cols-5">
                <ProjectCard />
            </div>
        </>
    )
}

export default ProjectContent