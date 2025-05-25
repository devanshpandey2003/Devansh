import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
    {
        id: 1,
        image: Image1,
        title: "AI & ML Solutions",
        description:
            "Designing and deploying machine learning models with feature engineering, prompt tuning, and statistical evaluation for real-world impact.",
    },
    {
        id: 2,
        image: Image2,
        title: "Full-Stack Web Development",
        description:
            "Building scalable web platforms using React, Next.js, Express.js, PostgreSQL, and Tailwind CSS with responsive, user-focused design.",
    },
    {
        id: 3,
        image: Image3,
        title: "Computer Vision & NLP",
        description:
            "Creating innovative applications using OpenCV, MediaPipe, and NLP libraries like NLTK and SpaCy for gesture control, resume ranking, and more.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div className="services__card" key={id}>
                        <img src={image} alt={title} className="services__img" width="80" />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
