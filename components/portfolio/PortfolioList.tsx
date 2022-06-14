import React, { FC } from 'react';
import { IProject } from '../../interfaces';
import Project from './Project';

const projects: Array<IProject> = [
    {
        url: '/portfolio/github-user-search',
        title: 'Github user search',
        imgLight: 'https://nextui.org/images/card-example-4.jpeg',
        imgDark: 'https://nextui.org/images/card-example-4.jpeg',
        features: ['useRef Hook', 'useState Hook']
    },
    {
        url: '/portfolio/markdown',
        title: '',
        imgLight: '/images/markdown-preview-light.png',
        imgDark: '/images/markdown-preview-dark.png',
        features: []
    }
];

const PortfolioList: FC = (): any => {
    return (
        projects.map((project, i) => (
            <Project key={i} project={project} />
        ))
    )
}

export default PortfolioList