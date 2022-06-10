import React, { FC } from 'react';
import { Collapse, Grid } from "@nextui-org/react";
import { PortfolioList } from '../portfolio';
import { ExperienceList } from '../experience';
import Education from '../education/Education';

const CollapsePage: FC = (): any => {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group key={'collapse-group'} >
          <Collapse key={'collapse1'} title='Porfolio' subtitle='Projects made with react to practice skills.'>
            <Grid.Container key={'collapse-container-1'} gap={10} justify="center" >
              <PortfolioList />
            </Grid.Container>
          </Collapse>
          <Collapse key={'collapse2'} title='Experience' subtitle='Work experience.'>
            <Grid.Container key={'collapse-container-2'} gap={2} justify="center" >
              <ExperienceList />
            </Grid.Container>
          </Collapse>
          <Grid xs={0} sm={12} css={{
            padding: '$0'
          }}>
            <Collapse key={'collapse3'} title='Education' subtitle='' >
              <Grid.Container key={'collapse-container-3'} gap={1} justify="center" xs={12}>
                <Education />
              </Grid.Container>
            </Collapse>
          </Grid>
        </Collapse.Group >
      </Grid>
    </Grid.Container>
  )
}

export default CollapsePage;
