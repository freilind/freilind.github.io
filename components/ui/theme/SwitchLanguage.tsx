import React, { FC } from 'react'
import { Switch } from '@nextui-org/react';
import { FlagIcon } from '../icons';

const SwitchLanguage: FC = () => {
    return (
        <Switch
            size="md"
            iconOff={<FlagIcon size={'xs'} language={'es'} />}
            iconOn={<FlagIcon size={'xs'} language={'gb'} />}
        />
    )
}

export default SwitchLanguage;
