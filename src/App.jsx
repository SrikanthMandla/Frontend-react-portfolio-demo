import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const name = "Srikanth Mandla";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title : "Project 1",
      description : "A web application built using React and Node.js that allows users to track their daily tasks and manage their time effectively.",
       link : "#"
    },
    {
      title : "Project 2",
      description : "A mobile application built using React Native that allows users to track their fitness goals and monitor their progress.",
      link : "#"
    },
    {
      title : "Project 3",
      description : "A desktop application built using Electron that allows users to manage their files and folders efficiently.",
      link : "#"
    }

];

  return (
  <div className = "App">

    {/* Header Section */}
    <div className="header">
    <h1>{name}</h1>
    <p>{profession}</p>
    <nav>
      <a href='#about'>about</a>
      <a href='#contact'>Contact</a>
      <a href='#projects'>Projects</a>
    </nav>
    </div>

    {/* About Section */}
      <section id= 'about' className='about-section'>
        <h2>About Me</h2>
        <p> Hello,  I am {name}, a passionate {profession}. I love to build the application which solves the real world problems. </p>
      </section>
        
      {/* Project Section */}
      <section id="projects" className='projects-section'>
        <h2>Projects</h2>
         <div className= 'projects-list'>
          {projects.map((project, index) =>(
            <div key= {index} className= 'project-item'>
              <h3>{project.title}</h3>

              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">view project</a>
            </div>
               
          ))}
         </div>
      </section>

      <section id = 'contact' className = 'contact-section'>
         <h2>Contact Me</h2>
         <p>If you would like to get in touch, feel free to email at <a href="mailto:srikanthmandla22@gmail.com">srikanthmandla22@gmail.com</a></p>

         </section>

         <footer className='footer'>
           <p>2026. All Right Reserved</p>
         </footer>
    
  </div>
  );

}

export default App;