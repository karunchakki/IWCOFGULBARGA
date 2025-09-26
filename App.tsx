import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import GetInvolved from './components/GetInvolved';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import ProjectDetailPage from './components/ProjectDetailPage';
import BlogPostDetailPage from './components/BlogPostDetailPage';
import ScrollToTop from './components/ScrollToTop';

import { PROJECTS_DATA, EVENTS_DATA, BLOG_POSTS_DATA, NAV_LINKS, TEAM_DATA } from './constants';

const MainLayout: React.FC = () => (
  <main>
    <Hero />
    <About />
    <Projects projects={PROJECTS_DATA} />
    <Team members={TEAM_DATA} />
    <Events events={EVENTS_DATA} />
    <GetInvolved />
    <Blog posts={BLOG_POSTS_DATA} />
    <Contact />
  </main>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header navLinks={NAV_LINKS} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/blog/:id" element={<BlogPostDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;