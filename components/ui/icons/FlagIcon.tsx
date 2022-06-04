import { Avatar } from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  language: string;
  alt?: string
}

export const FlagIcon: FC<Props> = ({ language, size, alt }) => {
  return (
    <Avatar
      size={size}
      alt={alt} 
      src={`/icons/${language}.svg`} />
  )
};
