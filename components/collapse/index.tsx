import React, { FC } from 'react';
import { Collapse, Grid } from "@nextui-org/react";
import { PortfolioList } from '../portfolio';
import { ExperienceList } from '../experience';
import Education from '../education/Education';
import { useIntl } from 'react-intl';

const CollapsePage: FC = (): any => {
  const intl = useIntl();

  const title1 = intl.formatMessage({ id: "collapse.title.1" });
  const subtitle1 = intl.formatMessage({ id: "collapse.subtitle.1" });
  const title2 = intl.formatMessage({ id: "collapse.title.2" });
  const subtitle2 = intl.formatMessage({ id: "collapse.subtitle.2" });
  const title3 = intl.formatMessage({ id: "collapse.title.3" });
  const subtitle3 = intl.formatMessage({ id: "collapse.subtitle.3" });

  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group key={'collapse-group'} >
          <Collapse key={'collapse1'} title={title1} subtitle={subtitle1}>
            <Grid.Container key={'collapse-container-1'} gap={10} justify="center" >
              <PortfolioList />
            </Grid.Container>
          </Collapse>
          <Collapse key={'collapse2'} title={title2} subtitle={subtitle2}>
            <Grid.Container key={'collapse-container-2'} gap={2} justify="center" >
              <ExperienceList />
            </Grid.Container>
          </Collapse>
          <Grid xs={0} sm={12} css={{
            padding: '$0'
          }}>
            <Collapse key={'collapse3'} title={title3} subtitle={subtitle3} >
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
