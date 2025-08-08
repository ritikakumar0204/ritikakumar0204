import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Leadership />
              <Achievements />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;