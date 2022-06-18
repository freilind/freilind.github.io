import React, { FC } from 'react';
import NextLink from 'next/link';
import { Grid, Card, Col, Spacer, Link, Text, useTheme } from '@nextui-org/react';
import { IProject } from '../../interfaces';

interface ProjectProps {
    project: IProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
    const { isDark } = useTheme();
    return (
        <NextLink href={project.url} passHref>
            <Link>
                <Card cover bordered >
                    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h4 color='secondary'>
                            </Text>
                            <Spacer />
                        </Col>
                    </Card.Header>

                    {isDark &&
                        <Card.Image
                            src={project.imgLight}
                            //height={300}
                            width='100%'
                            alt=''
                        />
                    }

                    {!isDark &&
                        <Card.Image
                            src={project.imgDark}
                            //height={300}
                            width='100%'
                            alt=''
                        />
                    }
                </Card>
            </Link>
        </NextLink>
    )
}

export default Project;
