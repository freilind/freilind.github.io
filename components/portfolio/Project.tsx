import React, { FC } from 'react';
import NextLink from 'next/link';
import { Grid, Card, Col, Spacer, Link, Text, useTheme } from '@nextui-org/react';
import Feature from './Feature';
import { IProject } from '../../interfaces';

interface ProjectProps {
    project: IProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
    const { isDark } = useTheme();
    return (
        <Grid>
            <NextLink href={project.url} passHref>
                <Link>
                    <Card cover bordered >
                        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h4 color='secondary'>
                                    {project.title}
                                </Text>
                                <Spacer />
                                {
                                    project.features.map((f, i) => (
                                        <Feature key={i} title={f} />
                                    ))
                                }

                            </Col>
                        </Card.Header>

                        {isDark &&
                            <Card.Image
                                src={project.imgLight}
                                height={300}
                                width='100%'
                                alt=''
                            />
                        }

                        {!isDark &&
                            <Card.Image
                                src={project.imgDark}
                                height={300}
                                width='100%'
                                alt=''
                            />
                        }

                    </Card>
                </Link>
            </NextLink>
        </Grid>
    )
}

export default Project;
