import React, { FC } from 'react';

interface Props {
    tech: string;
}

const Skill: FC<Props> = ({ tech }) => {
    return (
        <i className={`bx bx-lg bxl-${tech}`}></i>
    )
}

export default Skill;
