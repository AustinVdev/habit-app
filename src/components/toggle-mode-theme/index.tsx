// Packages
import React, {FC} from 'react';
import {Icon, Toggle, useTheme} from '@ui-kitten/components';

// Interfaces
import {IToggleModeTheme} from './interfaces';
import styles from './styles';

const ToggleModeTheme: FC<IToggleModeTheme> = ({isDarkMode, onChange}) => {
  const theme = useTheme();

  const configIcon = {
    name: isDarkMode ? 'moon-outline' : 'sun-outline',
    fill: theme['color-primary-default'],
    style: styles.icon,
  };

  return (
    <Toggle checked={isDarkMode} status="basic" onChange={onChange}>
      <Icon {...configIcon} />
    </Toggle>
  );
};

export default ToggleModeTheme;
