import React from 'react';
import "./TopContent.css";
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { LinkedIn } from '@material-ui/icons';



const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <p>Hi, I am </p>
            <h4>THARUN KUMAR</h4> 
            <p>Aritificial Intelligence and Data Science Student</p>
            
              <a href='www.google.com'>
                  <button className='topContent__downloadButton'>Download CV</button>
              </a>
              <div class='profile__link'>
              <a href='https://www.linkedin.com/in/tharun-kumar-037081238/' target='_blank'>
                      <IconButton>
                          <LinkedIn></LinkedIn>
                      </IconButton>
              </a>
              <a href='https://github.com/tharun1177' target='_blank'>
                      <IconButton>
                          <GitHubIcon></GitHubIcon>
                      </IconButton>
              </a>
              <a href='https://www.skillrack.com/faces/resume.xhtml?id=352380&key=db0e2b22678eae931f524d21137adf03ab78f39e' target='_blank'>
                      <IconButton>
                          <CodeIcon></CodeIcon>
                      </IconButton>
              </a>
              </div>
        </div>
    </div>
  )
}

export default TopContent;