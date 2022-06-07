import { Grid } from '@nextui-org/react';
import React, { FC } from 'react'
import Experience from './Experience';

interface IProject {
    company: string;
    date: string;
    description: string;
    tech: string;
    rol: string
}

const experiences: Array<IProject> = [
    {
        company: 'Nisum Latam',
        date: 'May 16 - Present',
        description: 'Desarrollo de producto crédito hipotecario para el sector bancario. \
        Desarrollando nuevos componentes para arquitectura de microservicios y mantener \
        la integración con el monolito para la continuidad de la operación.\
        Apoyando a la organización en la transformación digital y metodologías ágiles.',
        tech: 'Tecnologías: java, spring boot, spring cloud, angular, nodejs, jenkins.',
        rol: 'Senior Developer'
    },
    {
        company: 'LoreBI',
        date: 'Jan 15 - Apr 16',
        description: 'Desarrollo de una plataforma de wifi gratuita que requiere que la persona \
        observe publicidad segmentada antes de permitirle navegar por un tiempo determinado. \
        Mi función era el desarrollo de toda la aplicación utilizando java y framework Spring mvc.\
        Desarrollo de un dashboard que donde se visualicen las métricas y comportamiento de los usuarios del wifi.',
        tech: 'Tecnologías: java , spring mvc, jpa, hibernate, glassfish, maven, svn.',
        rol: 'Especialista IT'
    },
    {
        company: 'Corp. Wimac Systems',
        date: 'Nov 13 - May 14',
        description: 'Proyecto sobre reclamos y fallas masivas. Telecomunicaciones Movilnet C.A. \
        Desarrollo de módulo para registrar los reclamos de los clientes y generar estadísticas y \
        reportes que ayudaran a la gerencia del negocio a tomar decisiones con respecto a las fallas. \
        Mi función era el desarrollo de la capa vista y controlador del sistema.',
        tech: 'Tecnologías: java, primefaces, ejb, Jboss, python, eclipseIDE, postgresql.',
        rol: 'Especialista IT'
    },
    {
        company: 'Eliexir Cm Computer',
        date: 'Nov 12 - Nov 13',
        description: 'Proyecto de Voz módulo para CVSC+.\
         Telefónica Venezuela. Desarrollo de módulo para asociar números telefónicos con la finalidad de lograr la comunicación directa con planes y condiciones especiales. \
          Mi función era el desarrollo de webservice que utilizaran los stored procedured corespondientes para la activación\
           y desactivación de planes y servicios en el módulo de VPN de voz.',
        tech: 'Tecnologías: java, weblogic 8.5, web services, eclipse IDE, svn, maven soap UI.',
        rol: 'Desarrollador Java'
    }

];

const ExperienceList: FC = (): any => {
    return (
        <Grid.Container gap={2} justify='center'>
            {experiences.map((experience, i) => (
                <Experience
                    company={experience.company}
                    date={experience.date}
                    description={experience.description}
                    tech={experience.tech}
                    rol={experience.rol}
                    key={i} />
            ))}
        </Grid.Container>
    )
}


export default ExperienceList;

