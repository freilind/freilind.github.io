import React, { FC } from 'react';
import Image from 'next/image';
//import { Image } from "@nextui-org/react";

const Photo: FC = () => {
    return (
        <Image
            layout='responsive'
            objectFit='fill'
           // autoResize={true}
            className='img-rounded'
            width={250}
            height={250}
            src="/images/retrato.jpg"
            alt="photo"
        />
    )
}

export default Photo;
