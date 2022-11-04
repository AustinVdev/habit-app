import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import styles from './styles';
import CardHabit from '@components/card-habit';
import {dataTask} from '@data/dataTask';

const Habits: FC = () => {
  
  const dataHabit = dataTask.filter(({type}) => type === 'habit');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.layout}>
        <View style={styles.section}>
          <Text category="h1">Hábitos</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            {dataHabit.map(
              ({title, id, positiveCounter, negativeCounter}, index) => (
                <CardHabit
                  title={title}
                  id={id}
                  key={index}
                  positiveCounter={positiveCounter}
                  negativeCounter={negativeCounter}
                />
              ),
            )}
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Habits;
