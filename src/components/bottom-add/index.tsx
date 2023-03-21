import IconSVG from '@icons/index';
import {Button} from '@ui-kitten/components';
import React, {FC} from 'react';
import styles from './styles';

const ButtonAdd: FC<{onPress?: () => void}> = ({onPress}) => {
  return (
    <Button
      style={styles.button}
      onPress={onPress}
      accessoryLeft={style => IconSVG(style, 'plus-outline')}
    />
  );
};

export default ButtonAdd;
