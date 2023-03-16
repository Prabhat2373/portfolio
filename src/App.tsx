import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Home/Hero';
import { Routes, Route } from 'react-router-dom';
import About from './components/AboutIndex';
import Footer from './components/Footer';
import Page from './components/Page';
import ProjectContent from './pages/Projects/ProjectContent';
import ProjectIndex from './pages/Projects/ProjectIndex';
import ContactIndex from './pages/Contact/ContactIndex';
import Layout from './components/Layout';
import ContactForm from './pages/Contact/ContactForm';
import AboutPageContent from './pages/About/PageContent';
import ProjectSidebar from './pages/Projects/ProjectSidebar';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <Layout
            //   content={}
            //   sidebarTitle1="none"
            //   tabName="hero"
            //   sidebarDetails1={'none'}
            // />
            <Hero />
          }
        />
        <Route
          path="/about"
          element={
            <Layout
              content={<AboutPageContent />}
              sidebarTitle1="_personal-info"
              tabName="_personal-info"
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Layout
              content={<ProjectContent />}
              sidebarTitle1="_Projects"
              tabName="_projects"
              sidebarDetails1={<ProjectSidebar />}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Layout
              content={<ContactForm />}
              sidebarTitle1="Contact"
              tabName="_Contact"
              sidebarDetails1={'any'}
              sidebarDetails2={'any'}
            />
          }
        />
        {/* <Route
          path="/demo"
          element={
            <Layout
              content={<ContactForm />}
              sidebarTitle1="Contact"
              tabName="_Contact"
              sidebarDetails1={'any'}
              sidebarDetails2={'any'}
            />
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
