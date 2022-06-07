import React, { FC } from 'react';
import NextLink from 'next/link';
import { Grid, Card, Col, Spacer, Link, Text } from '@nextui-org/react';
import Feature from './Feature';

interface Props {
    url: string;
    title: string;
    img: string;
    features: string[]
}


const Project: FC<Props> = ({ url, title, img, features }) => {
    return (
        <Grid>
            <NextLink href={url} passHref>
                <Link>
                    <Card cover >
                        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h4 color='secondary'>
                                    {title}
                                </Text>
                                <Spacer />
                                {
                                    features.map((f, i) => (
                                        <Feature key={i} title={f} />
                                    ))
                                }

                            </Col>
                        </Card.Header>
                        <Card.Image
                            src={img}
                            height={300}
                            width='100%'
                            alt=''
                        />
                    </Card>
                </Link>
            </NextLink>
        </Grid>
    )
}

export default Project;
