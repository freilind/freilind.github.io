import React, { FC } from 'react';
import { Image } from "@nextui-org/react";

const Photo: FC = () => {
    return (
        <Image
            objectFit='fill'
            autoResize={true}
            className='img-rounded'
            width={250}
            height={250}
            src="/images/retrato.jpg"
            alt="photo"
        />
    )
}

export default Photo;
