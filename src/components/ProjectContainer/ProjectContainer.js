import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import skilling from '../assets/skill.jpg';
import './ProjectContainer.css';

const ProjectContainer = () => {
    const projects = [
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 
        {
            img: skilling, 
            title: "Valorant", 
            desc: "As far as this kind of top-end performance goes",
            link: "https://playvalorant.com/en-gb/"
        }, 

        
    ];
  return (
    <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are the some projects which I done for making lives of people easy.</p>
        <div className='projectContainer__projects'>
        {
            projects.map((project, index) => (
            <Project
                key={index}
                img={project.img}
                desc={project.desc}
                title={project.title}
                link={project.link}
            />
          ))}
        </div>
    </Element>
  )
}

export default ProjectContainer;