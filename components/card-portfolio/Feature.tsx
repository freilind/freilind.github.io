import React, { FC } from 'react';
import { Checkbox, Text } from '@nextui-org/react';

interface Props {
    title: string;
    color?: any;
    size?: string;
}

const Feature: FC<Props> = ({ title, color = 'success', size = '1rem' }) => {
    return (
        <Checkbox defaultSelected={true} isReadOnly={true} isRounded={true} size='md' color={color}>
            <Text size={size} color='white'>
                {title}
            </Text>
        </Checkbox>
    )
}

export default Feature;
