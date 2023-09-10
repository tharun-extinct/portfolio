import React from 'react';
import './Contact.css';
import {Element} from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                E-mail : thar21ad069@rmkcet.ac.in
            </p>
            <p>
                Github Username : <span>@tharun_extinct</span>
            </p>
            <div className='contact__icons'>
                <a href='google.com'>
                    <IconButton>
                        <LinkedIn></LinkedIn>
                    </IconButton>
                </a>
                <a href='google.com'>
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/tharun_extinct/saved/'>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact