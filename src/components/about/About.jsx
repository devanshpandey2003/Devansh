import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/Devansh_Pandey_CV.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                       <p className="about__description">
    Hello! I'm Devansh, based in Indore, India. I'm currently pursuing my B.Tech in Computer Science at SGSITS Indore, where I'm exploring core subjects like Operating Systems, Data Structures, AI, and Machine Learning.<br /><br />
    Fast forward to today, and it’s been an incredible journey filled with hands-on projects and internships. I’m passionate about building impactful software, especially in the fields of AI/ML and web development. Right now, I’m focused on expanding my portfolio through personal and collaborative projects, while continuing to grow as a Software Engineer.<br /><br />
    Here are a few technologies I’ve been working with recently:
</p>

<h4 className="about__tech-category">Web Development</h4>
<ul className="about__list">
    <li>JavaScript</li>
    <li>React.js</li>
    <li>Next.js</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>PostgreSQL</li>
    <li>Tailwind CSS</li>
    <li>ShadCN UI</li>
</ul>

<h4 className="about__tech-category">AI / ML</h4>
<ul className="about__list">
    <li>Python</li>
    <li>TensorFlow</li>
    <li>Keras</li>
    <li>OpenCV</li>
    <li>MediaPipe</li>
    <li>Scikit-learn</li>
    <li>NLTK</li>
    <li>Prompt Engineering (OpenAI API)</li>
</ul>

                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About