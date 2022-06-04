import React, { FC } from 'react';
import { Collapse, Grid } from "@nextui-org/react";
import { CardPortfolioList } from '../card-portfolio';

const CollapsePage: FC = (): any => {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group key={'collapse-group'}>
          <Collapse key={'collapse1'} title='Porfolio' subtitle='Projects made with react to practice skills.'>
            <Grid.Container key={'collapse-container-1'} gap={10} justify="center" >
              <CardPortfolioList />
            </Grid.Container>
          </Collapse>
          <Collapse key={'collapse2'} title='Experience' subtitle='Work experience.'>
            <Grid.Container key={'collapse-container-2'} gap={10} justify="center" >
              TO-DO
            </Grid.Container>
          </Collapse>
          <Collapse key={'collapse3'} title='Education' subtitle=''>
            <Grid.Container key={'collapse-container-3'} gap={10} justify="center" >
              TO-DO
            </Grid.Container>
          </Collapse>
        </Collapse.Group >
      </Grid>
    </Grid.Container>
  )
}

export default CollapsePage;
