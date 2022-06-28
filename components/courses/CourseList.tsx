import React, { FC } from 'react';
import { Grid, Image } from "@nextui-org/react";

const CourseList: FC = (): any => {
    return (
        courses.map((course, i) => (
            <Grid key={i} sm={5}>
                <Image
                    objectFit='fill'
                    autoResize={true}
                    width={310}
                    height={220}
                    src={course.path}
                    alt={course.name}
                />
            </Grid>
        ))
    )
}

export default CourseList;

const courses: Array<any> = [
    {
        name: 'next-frmwk-prod',
        path: '/images/courses/next-frmwk-prod.png'
    },
    {
        name: 'next-react-guide',
        path: '/images/courses/next-react-guide.png'
    },
    {
        name: 'web-bootcamp2022',
        path: '/images/courses/web-bootcamp2022.png'
    },
    {
        name: 'master-cqrs',
        path: '/images/courses/master-cqrs.png'
    },
    {
        name: 'flutter-complete-guide',
        path: '/images/courses/flutter-complete-guide.png'
    },
    {
        name: 'flutter-2021',
        path: '/images/courses/flutter-2021.png'
    }
];
