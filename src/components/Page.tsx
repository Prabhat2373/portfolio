import React from 'react'
import PhoneIcon from './icons/PhoneIcon'
import MailIcon from './icons/MailIcon'
import CloseIcon from './icons/CloseIcon';
import CodeIcon from './icons/CodeIcon';
import PersonalInfoIcon from './icons/PersonalInfoIcon';
import HobbiesIcon from './icons/HobbiesIcon';
import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
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
        <div className='content overflow-y-scroll h-[76.4vh]'>
          {content}
        </div>
      </div>
      <div className='grid col-span-12 text-text-main'>
        <footer className="flex justify-between border-t border-t-border-main">
          <div className="flex items-center ">
            <div className='border-r border-border-main px-6 py-4' style={{
              padding: ' 12px 20px 12px 60px'
            }}>
              find me in:
            </div>
            <div className='border-r border-border-main px-6 py-4' onClick={() => {
              window.open('https://github.com/Prabhat2373', '_blank')
            }}  >
              <TwitterIcon />
            </div>
            <div className='border-r border-border-main px-6 py-4' onClick={() => {
              window.open('https://github.com/Prabhat2373', '_blank')
            }}>
              <FacebookIcon />
            </div>
            <div className='border-r border-border-main px-6 py-4 cursor-pointer' onClick={() => {
              window.open('https://github.com/Prabhat2373', '_blank')
            }}>
              <LinkedInIcon className="cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center border-l border-border-main px-6 py-4">
            <div className='pr-2'>
              @prabhat2373
            </div>
            <div> <GitHubIcon /></div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Page