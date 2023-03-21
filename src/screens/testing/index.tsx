import ButtonAdd from '@components/bottom-add';
import { Layout, Text } from '@ui-kitten/components';
import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';

const Testing: FC = () => {

const [a,b] = useState<boolean>(false);

const handleChange = () => {
  b(!a)
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex:1}}>
        <Text>
          Components
        </Text>
        <ButtonAdd/>
      </Layout>
    </SafeAreaView>
  );
};

export default Testing;
