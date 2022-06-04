import Image from 'next/Image';
import { FC } from 'react';

interface Props {
    country: string;
}

const FlagImage: FC<Props> = ({ country }) => {
    return (
        <Image
            className={'mt-5'}
            width={30}
            height={30}
            src={`/icons/${country}.svg`}
            alt="flag"
        />
    )
}

export default FlagImage;
