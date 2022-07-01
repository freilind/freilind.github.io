import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { projectsList } from '../projects';
import Project from './Porfolio';

const PortfolioList: FC = (): any => {
    return (
        projectsList.map((project, i) => (
            <Grid key={i} sm={5}>
                <Project project={project} />
            </Grid>
        ))
    )
}

export default PortfolioList;
