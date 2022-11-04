import IconSVG from '@icons/index';
import {CheckBox, ListItem, Text} from '@ui-kitten/components';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {ICarTask} from './interfaces';
import styles from './styles';

const CardTask: FC<ICarTask> = ({title, id, check_list, isFinished}) => {
  const [checked, setChecked] = useState<boolean>(isFinished);

  const RenderCheck = () => (
    <CheckBox
      status="primary"
      checked={checked}
      onChange={nextChecked => setChecked(nextChecked)}>
      {``}
    </CheckBox>
  );

  const RenderDescription = () => (
    <View style={styles.sectionCount}>
      <Text style={styles.itemCount} category="s2">
        {check_list
          ? check_list?.length > 0
            ? `sub tareas ${check_list?.length}`
            : ''
          : ''}
      </Text>
    </View>
  );

  const RenderTitle = () => <Text category="h6">{title}</Text>;

  return (
    <ListItem
      title={RenderTitle}
      description={RenderDescription}
      accessoryLeft={style => IconSVG(style, 'bulb')}
      accessoryRight={RenderCheck}
    />
  );
};

export default CardTask;
