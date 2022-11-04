import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import styles from './styles';
import CardTask from '@components/card-task';
import {dataTask} from '@data/dataTask';

const Tasks: FC = () => {
  const dataActivity = dataTask.filter(({type}) => type === 'activity');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.layout}>
        <View style={styles.section}>
          <Text category="h1">Actividades diarias</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            {dataActivity.map(({title, id, isFinished, check_list}, index) => (
              <CardTask
                title={title}
                id={id}
                key={index}
                isFinished={isFinished}
                check_list={check_list}
              />
            ))}
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Tasks;
