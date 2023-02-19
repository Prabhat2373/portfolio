import React from 'react'
import FileIcon from './icons/FileIcon'
import PhoneIcon from './icons/PhoneIcon'
import MailIcon from './icons/MailIcon'
import CloseIcon from './icons/CloseIcon';
import CodeIcon from './icons/CodeIcon';
import PersonalInfoIcon from './icons/PersonalInfoIcon';
import HobbiesIcon from './icons/HobbiesIcon';
interface PageProps {
  sidebarName: any;
  sidebarDetails: any;
  dataTabName: any;
  content: any;
}
const Page = ({ sidebarName, sidebarDetails, dataTabName, content }: PageProps) => {
  return (
    <section className='grid grid-cols-12'>
      <div className="grid grid-flow-col col-span-2 border border-border-main">
        <div className="about-sidebar border border-border-main">
          <div className="flex gap-9 flex-col justify-center items-center pt-4">
            <CodeIcon className="cursor-pointer" />
            <PersonalInfoIcon className="cursor-pointer" />
            <HobbiesIcon className="cursor-pointer" />
          </div>
        </div>
        <div className=" border-border-main">
          <div className="grid">
            <details className="text-white">
              <summary className="border-b-2  border-t border-border-main px-4 py-3">{sidebarName}</summary>
              <div className="pt-4">
                
                {sidebarDetails}
              </div>
            </details>

          </div>
          <div>
            <details className="border-b-2 border-border-main px-4 py-3">
              <summary className="text-white">contacts</summary>
              <div>
                <span className="text-text-main flex gap-2"><MailIcon /> prabhattambe10@gmail.com</span>
                <span className="text-text-main flex gap-2"><PhoneIcon /> +91 845905292</span>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className=' col-span-10'>
        <div className="top-bar border border-border-main ">
          <div className="top grid col-span-full h-[50px] border border-l-0 border-border-main border-t-0">
            <span className="text-text-main border-r border-border-main flex items-center gap-6 absolute p-3">{dataTabName}<CloseIcon className='cursor-pointer hover:fill-white' /></span>
          </div>
        </div>
        <div className='content'>
          {content}
        </div>
      </div>
    </section>
  )
}

export default Page