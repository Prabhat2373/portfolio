import React, { useState } from 'react';
import TwitterIcon from '../components/icons/TwitterIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/MailIcon';
import HobbiesIcon from '../components/icons/HobbiesIcon';
import PersonalInfoIcon from '../components/icons/PersonalInfoIcon';
import CodeIcon from '../components/icons/CodeIcon';
import CloseIcon from '../components/icons/CloseIcon';
import { Link, useLocation } from 'react-router-dom';
import CloseMenuIcon from '../components/icons/CloseMenuIcon';
import HamburgerIcon from '../components/icons/HamburgerIcon';
import FileIcon from '../components/icons/FileIcon';
type LayoutProps = {
  tabName: string;
  sidebarTitle1: string;
  sidebarTitle2?: string;
  content: JSX.Element;
  sidebarDetails1?: any;
  sidebarDetails2?: any;
};
const Layout = ({
  tabName,
  sidebarTitle1,
  sidebarTitle2,
  content,
  sidebarDetails1,
  sidebarDetails2,
}: LayoutProps) => {
  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="wrapper text-white">
        <header className="main-head">
          <nav
            className={`md:relative w-full h-full md:grid grid-cols-6 border border-border-main ${
              isOpen ? 'absolute z-30 bg-bg-main ' : 'bg-transparent z-0'
            }`}
          >
            <div className="md:col-span-1 items-center md:self-center flex justify-between p-4 border-r border-r-border-main">
              <h1 className="text-text-main text-left md:text-center w-full ">
                dev-prabhat
              </h1>
              <div
                className="md:hidden"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {isOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
              </div>
            </div>
            {isOpen && (
              <>
                <div
                  className={`col-span-4 transition-all duration-300 md:hidden ${
                    isOpen ? '' : 'hidden'
                  }`}
                >
                  <ul className="flex flex-col md:flex-row justify-start ">
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                        path === '/' ? 'border-b-yellow text-white' : ''
                      }`}
                    >
                      <Link to="/">_hello</Link>
                    </li>
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                        path === '/about' ? 'border-b-yellow text-white' : ''
                      }`}
                    >
                      <Link to="/about">_about-me</Link>
                    </li>
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                        path === '/projects' ? 'border-b-yellow text-white' : ''
                      }`}
                    >
                      <Link to="/projects">_projects</Link>
                    </li>
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                        path === '/contact' ? 'border-b-yellow text-white' : ''
                      }`}
                    >
                      <Link to="/contact">_contact</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`py-4 px-6 border border-border-main transition-all duration-300 ${
                    isOpen ? 'hidden' : ''
                  }`}
                >
                  <Link className="text-text-main  " to="/contact">
                    contact
                  </Link>
                </div>
              </>
            )}
            <div
              className={`col-span-4 transition-all duration-300 hidden md:block`}
            >
              <ul className="flex flex-col md:flex-row justify-start">
                <li
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                    path === '/' ? 'border-b-yellow text-white' : ''
                  }`}
                >
                  <Link to="/">_hello</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                    path === '/about' ? 'border-b-yellow text-white' : ''
                  }`}
                >
                  <Link to="/about">_about-me</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                    path === '/projects' ? 'border-b-yellow text-white' : ''
                  }`}
                >
                  <Link to="/projects">_projects</Link>
                </li>
              </ul>
            </div>
            <div
              className={`py-4 px-6 border border-border-main transition-all duration-300 hidden md:block`}
            >
              <Link
                className={`text-text-main hover:border-b-yellow ${
                  path === '/contact' ? 'border-b-yellow text-white' : ''
                }`}
                to="/contact"
              >
                contact
              </Link>
            </div>
          </nav>
        </header>
        <div className="side-bar hidden md:grid">
          <div className="grid grid-flow-col grid-cols-4 col-span-2 border border-border-main h-full">
            <div className="about-sidebar border border-border-main p-5 col-span-1">
              <div className="flex gap-9 flex-col justify-center items-center pt-4">
                <CodeIcon className="cursor-pointer" />
                <PersonalInfoIcon className="cursor-pointer" />
                <HobbiesIcon className="cursor-pointer" />
              </div>
            </div>
            <div className=" border-border-main col-span-3">
              <div className="grid">
                <details className="text-white">
                  <summary className="border-b-2 border-border-main px-4 py-3">
                    {sidebarTitle1}
                  </summary>
                  <div className="pt-4">
                    <div>
                      <details id="bio-details">
                        <summary className="summary h-[25px] px-4 py-3">
                          <span
                            style={{
                              display: 'flex',
                              position: 'relative',
                              top: '-20px',
                              left: '18px',
                              alignItems: 'center',
                              gap: '6px',
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
                              display: 'flex',
                              position: 'relative',
                              top: '-20px',
                              left: '18px',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                            className="text-text-main"
                          >
                            {' '}
                            <FileIcon color={'#43D9AD'} />
                            Interests
                          </span>
                        </summary>
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati repellat nam
                        </div>
                      </details>
                    </div>
                    <div>
                      <details id="educationDetails">
                        <summary className="summary h-[25px] px-4 py-3">
                          <span
                            style={{
                              display: 'flex',
                              position: 'relative',
                              top: '-20px',
                              left: '18px',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                            className="text-text-main"
                          >
                            <FileIcon color={'#3A49A4'} /> education
                          </span>
                        </summary>
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati repellat nam
                        </div>
                      </details>
                    </div>
                  </div>
                </details>
              </div>
              <div>
                <details className="border-b-2 border-border-main px-4 py-3">
                  <summary className="text-white">{sidebarTitle2}</summary>
                  <div>
                    <span className="text-text-main flex gap-2">
                      <MailIcon /> prabhattambe10@gmail.com
                    </span>
                    <span className="text-text-main flex gap-2">
                      <PhoneIcon /> +91 845905292
                    </span>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {/* <AboutPageContent /> */}
          <div className="top-bar border flex justify-start   border-border-main h-[50px] sticky top-0 z-10  backdrop-blur-3xl">
            <div className="flex border-r border-r-border-main w-auto h-full justify-start px-6 items-center gap-4 relative">
              <span>{tabName ?? ''}</span>
              <span className="cursor-pointer">
                <CloseIcon />
              </span>
            </div>
          </div>
          {/* <ProjectContent /> */}
          {content}
        </div>

        {/* FOOTER  */}
        <div className="main-footer border-t border-t-border-main ">
          <footer className="flex justify-between">
            <div className="flex items-center ">
              <div className="border-r border-border-main px-6 py-4 hidden sm:block">
                find me in:
              </div>
              <div className="border-r border-border-main px-6 py-4">
                <FacebookIcon />
              </div>
              <div
                className="border-r border-border-main px-6 py-4 cursor-pointer"
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/prabhat-tambe-a4125421b/',
                    '_blank'
                  );
                }}
              >
                <LinkedInIcon />
              </div>
            </div>
            <div
              className="flex items-center border-l border-border-main px-6 py-4 cursor-pointer"
              onClick={() => {
                window.open('https://www.github.com/prabhat2373', '_blank');
              }}
            >
              <div className="pr-2 hidden sm:block">@prabhat2373</div>
              <div>
                {' '}
                <GitHubIcon />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
