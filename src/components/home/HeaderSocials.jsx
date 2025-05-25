import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/devanshpandey2003' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>


            <a href='https://www.linkedin.com/in/devansh-pandey-43a199258/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
