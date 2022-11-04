import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Layout, ListItem, Text, ViewPager} from '@ui-kitten/components';

import styles from './styles';
import CardInfo from '@components/card-info';
import IconSVG from '@icons/index';
import {dataTask} from '@data/dataTask';
import useUserContext from '@hooks/useUserContext';

const Home: FC = () => {
  const user = useUserContext();
  const countHabit = dataTask.filter(({type}) => type === 'habit').length;
  const countTask = dataTask.filter(({type}) => type === 'task').length;
  const countActivity = dataTask.filter(({type}) => type === 'activity').length;

  const taskRecom = dataTask.sort().slice(0, 3);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderItemAccessory = () => <Button size="small">Comenzar</Button>;

  const RenderItem = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <ListItem
      title={`${title}`}
      description={`${description}`}
      accessoryLeft={style => IconSVG(style, 'bulb')}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.layout}>
        <View style={styles.section}>
          <Text category="h1">Hola, {user.state.fullName}</Text>
          <Text category="s1">Ten un buen dia</Text>
        </View>
        <View style={styles.section}>
          <CardInfo type="Hábitos" value={countHabit} />
          <CardInfo type="Tareas pendientes" value={countTask} />
          <CardInfo type="Actividades diarias" value={countActivity} />
        </View>
        <View style={styles.section}>
          <Text category="h6">Comienza tu dia con estas actividades</Text>
        </View>
        <View style={styles.section}>
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            {taskRecom.map((item, index) => (
              <RenderItem key={index} {...item} />
            ))}
          </ViewPager>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
