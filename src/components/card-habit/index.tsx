import IconSVG from '@icons/index';
import {
  Button,
  ButtonGroup,
  ListItem,
  Text,
  useTheme,
} from '@ui-kitten/components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {ICarHabit} from './interfaces';
import styles from './styles';

const CardHabit: FC<ICarHabit> = ({
  title,
  positiveCounter,
  negativeCounter,
}) => {
  const theme = useTheme();

  const RenderDescription = () => (
    <View style={styles.sectionCount}>
      <Text style={styles.itemCount} category="s2">
        {positiveCounter > 0 ? `+${positiveCounter}` : ''}
      </Text>
      <Text style={styles.itemCount} category="s2">
        {positiveCounter > 0 ? `-${negativeCounter}` : ''}
      </Text>
    </View>
  );

  const RenderCount = () => (
    <ButtonGroup appearance="filled">
      <Button>+</Button>
      <Button>-</Button>
    </ButtonGroup>
  );

  const RenderTitle = () => <Text category="h6">{title}</Text>;

  return (
    <ListItem
      title={RenderTitle}
      description={RenderDescription}
      accessoryLeft={style => IconSVG(style, 'hash')}
      accessoryRight={RenderCount}
    />
  );
};

export default CardHabit;
