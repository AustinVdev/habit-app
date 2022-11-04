import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import styles from './styles';
import CardTask from '@components/card-task';
import {dataTask} from '@data/dataTask';

const CheckList: FC = () => {
  const _dataTask = dataTask.filter(({type}) => type === 'task');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.layout}>
        <View style={styles.section}>
          <Text category="h1">Tareas Pendientes</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            {_dataTask.map(({title, id, isFinished, check_list}, index) => (
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

export default CheckList;
