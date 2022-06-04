import { Grid, Container, Row, Spacer, Text, Link } from '@nextui-org/react'
import { FC } from 'react'
import FlagImage from '../ui/flag'
import Photo from '../ui/photo'

const Description: FC = () => {
    return (
        <Grid.Container gap={1} justify="flex-start">
            <Grid xs={12} sm={3}>
                <Photo />
            </Grid>
            <Grid xs={12} sm={9} direction='column'>
                <Grid.Container >
                    <Grid xs={12} sm={9} className={'name'}>
                        <Text h2 className={'font-raleway'} transform='uppercase' >
                            Freilin Manzano
                        </Text>
                    </Grid>
                    <Grid xs={12} sm={3} className={'rrss'} >
                        <Link href="https://www.linkedin.com/in/freilind/" target={'_blank'}>
                            <i className={`bx bx-md bxl-linkedin-square`}></i>
                        </Link>
                        <Link href="https://www.instagram.com/ftojoh/" target={'_blank'}>
                            <i className={`bx bx-md bxl-instagram`}></i>
                        </Link>
                        <Link href="#">
                            <i className={`bx bx-md bxl-gmail`}></i>
                        </Link>
                    </Grid>
                </Grid.Container>
                <Spacer />
                <Container fluid={true}>
                    <Text size='1.3rem' className={'font-console'}>
                        Estimado (a), ante todo un coordial saludo.  <br />
                    </Text>
                    <Text size='1.3rem' className={'font-console'}>
                        Mi nombre es Freilin Manzano, nací en Venezuela <FlagImage country={'ve'} />  y actualmente estoy radicado en Chile <FlagImage country={'cl'} />.
                        Me dedico al Desarrollo web, con experiencia (+8 años) y certificación Java (Java SE 8 Programmer I 1Z0-808),
                        entusiasta por el área de front-end con React.js, Next.js, TailwindCss, Flutter.
                    </Text>
                </Container>
            </Grid>
        </Grid.Container>
    )
}

export default Description