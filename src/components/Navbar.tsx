import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerIcon from './icons/HamburgerIcon';
import Footer from './Footer';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import CloseIcon from './icons/CloseIcon';
import CloseMenuIcon from './icons/CloseMenuIcon';

const Navbar = () => {
  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  console.log(path);
  console.log(isOpen);
  return (
    <>
      <header>
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
                    className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                      path === '/' ? 'border-b-yellow text-white' : ''
                    }`}
                  >
                    <Link to="/">_hello</Link>
                  </li>
                  <li
                    className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                      path === '/about' ? 'border-b-yellow text-white' : ''
                    }`}
                  >
                    <Link to="/about">_about-me</Link>
                  </li>
                  <li
                    className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                      path === '/projects' ? 'border-b-yellow text-white' : ''
                    }`}
                  >
                    <Link to="/projects">_projects</Link>
                  </li>
                  <li
                    className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                      path === '/contact' ? 'border-b-yellow text-white' : ''
                    }`}
                  >
                    <Link to="/contact">_contact</Link>
                  </li>
                </ul>
                <div>
                  <footer className="hero-footer bg-bg-main border border-border-main  md:hidden flex justify-between text-text-main absolute bottom-0 w-full ">
                    <div className="flex items-center ">
                      <div className="border-r border-border-main px-6 py-4">
                        find me in:
                      </div>
                      <div className="hidden md:block border-r border-border-main px-6 py-4">
                        <TwitterIcon />
                      </div>
                      <div className="border-r border-border-main px-6 py-4">
                        <FacebookIcon />
                      </div>
                      <div className="border-r border-border-main px-6 py-4">
                        <LinkedInIcon />
                      </div>
                    </div>
                    <div className="flex items-center border-l border-border-main px-6 py-4">
                      <div className="pr-2 hidden md:block">@prabhat2373</div>
                      <div className="hidden md:hidden border-r border-border-main px-6 py-4">
                        <TwitterIcon />
                      </div>
                      <div>
                        {' '}
                        <GitHubIcon />
                      </div>
                    </div>
                  </footer>
                </div>
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
                className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                  path === '/' ? 'border-b-yellow text-white' : ''
                }`}
              >
                <Link to="/">_hello</Link>
              </li>
              <li
                className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                  path === '/about' ? 'border-b-yellow text-white' : ''
                }`}
              >
                <Link to="/about">_about-me</Link>
              </li>
              <li
                className={`flex justify-start  md:justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${
                  path === '/projects' ? 'border-b-yellow text-white' : ''
                }`}
              >
                <Link to="/projects">_projects</Link>
              </li>
            </ul>
            <div className="md:hidden">
              <footer className="hero-footer bg-bg-main border border-border-main md:hidden flex justify-between text-text-main absolute bottom-0 w-full ">
                <div className="flex items-center ">
                  <div className="border-r border-border-main px-6 py-4">
                    find me in:
                  </div>
                  <div className="hidden md:block border-r border-border-main px-6 py-4">
                    <TwitterIcon />
                  </div>
                  <div className="border-r border-border-main px-6 py-4">
                    <FacebookIcon />
                  </div>
                  <div className="border-r border-border-main px-6 py-4">
                    <LinkedInIcon />
                  </div>
                </div>
                <div className="flex items-center border-l border-border-main px-6 py-4">
                  <div className="pr-2 hidden md:block">@prabhat2373</div>
                  <div className="hidden md:hidden border-r border-border-main px-6 py-4">
                    <TwitterIcon />
                  </div>
                  <div>
                    {' '}
                    <GitHubIcon />
                  </div>
                </div>
              </footer>
            </div>
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
    </>
  );
};

export default Navbar;
