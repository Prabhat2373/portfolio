import React from 'react'
import CodeIcon from '../components/icons/CodeIcon'
import PersonalInfoIcon from '../components/icons/PersonalInfoIcon'
import HobbiesIcon from '../components/icons/HobbiesIcon'
import FileIcon from '../components/icons/FileIcon'

const About = () => {
  return (
    <>
      <section className='grid grid-flow-col grid-cols-12 border border-border-main'>
        <div className="grid grid-flow-col col-span-2 border border-border-main">
          <div className="about-sidebar border border-border-main" >
            <div className='flex gap-9 flex-col justify-center items-center pt-4'>
              <CodeIcon className="cursor-pointer" />
              <PersonalInfoIcon className="cursor-pointer" />
              <HobbiesIcon className="cursor-pointer" />
            </div>
          </div>
          <div className='grid border col-span-4 border-border-main'>
            <div className='grid'>
              <details className='text-white'>
                <summary>personal-info</summary>
                <div>
                 <div>
                  <details>
                  <summary ><span> Bio</span></summary>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat nam</div>
                 </details>
                 </div>
                  <FileIcon color={'#43D9AD'}/>
                  <FileIcon color={'#3A49A4'}/>
                </div>
              </details>
            </div>

          </div>
        </div>
        <div className="grid col-span-5 border border-border-main"></div>
        <div className="grid col-span-5 border border-border-main"></div>
      </section>
    </>
  )
}

export default About