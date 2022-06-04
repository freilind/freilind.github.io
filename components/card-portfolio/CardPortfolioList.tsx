import React, { FC } from 'react';
import CardProject from './CardProject';

interface IProject {
    url: string;
    title: string;
    img: string;
    features: string[]
}

const projects: Array<IProject> = [
    {
        url: '/portfolio/github-user-search',
        title: 'Github user search',
        img: 'https://nextui.org/images/card-example-4.jpeg',
        features: ['useRef Hook', 'useState Hook']
    },
    {
        url: '/portfolio/github-user-search',
        title: 'Pokemón API',
        img: 'https://nextui.org/images/card-example-4.jpeg',
        features: ['useRef Hook', 'useState Hook']
    },
    {
        url: '/portfolio/github-user-search',
        title: 'TODO',
        img: 'https://nextui.org/images/card-example-4.jpeg',
        features: ['useRef Hook', 'useState Hook']
    },
    {
        url: '/portfolio/github-user-search',
        title: 'Notes',
        img: 'https://nextui.org/images/card-example-4.jpeg',
        features: ['useRef Hook']
    }
];

const CardPortfolioList: FC = (): any => {
    return (
        projects.map((project, i) => (
            <CardProject key={i} url={project.url} title={project.title} img={project.img} features={project.features} />
        ))
    )
}

export default CardPortfolioList