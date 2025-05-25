import React from 'react';
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">

            <div className="about__box">
                <RiCupLine className='about__icon' />
                <div>
                    <h3 className="about__title">20+</h3>
                    <span className="about__subtitle">GitHub Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />
                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Major Projects Built</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">Shortlisted</h3>
                    <span className="about__subtitle">Smart India Hackathon 2024</span>
                </div>
            </div>

            <div className="about__box">
                <RiFireLine className='about__icon' />
                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Freelance Project</span>
                </div>
            </div>

        </div>
    );
};

export default AboutBox;
