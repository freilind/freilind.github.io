import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { IProject } from '../../interfaces';
import Project from './Project';

const projects: Array<IProject> = [
    {
        url: '/portfolio/github-user-search',
        title: 'Github user search',
        imgLight: 'images/github-search-light.png',
        imgDark: 'images/github-search-dark.png',
    },
    {
        url: '/portfolio/markdown',
        title: 'Markdown',
        imgLight: '/images/markdown-preview-light.png',
        imgDark: '/images/markdown-preview-dark.png'
    },
    {
        url: '/portfolio/reduce-text',
        title: 'Reduce text',
        imgLight: '/images/reduce-light.png',
        imgDark: '/images/reduce-dark.png'
    }
];

const PortfolioList: FC = (): any => {
    return (
        projects.map((project, i) => (
            <Grid key={i} sm={5}>
                <Project project={project} />
            </Grid>
        ))
    )
}

export default PortfolioList