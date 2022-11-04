import {Text, useTheme} from '@ui-kitten/components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {ICardInfo} from './interfaces';
import styles from './styles';

const CardInfo: FC<ICardInfo> = ({type, value, backgroundColor}) => {
  const theme = useTheme();

  const selectBackgroundColor = backgroundColor
    ? theme['backgroundColor']
    : theme['color-primary-default'];

  return (
    <View style={{...styles.card, backgroundColor: selectBackgroundColor}}>
      <View>
        <Text category="h1">{value}</Text>
        <Text category="s1">{type}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default CardInfo;
