// Packages
import React, {FC} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components';

// Interfaces
import {ILoader} from './interfaces';

// Styles
import styles from './styles';

const Loader: FC<ILoader> = ({transparent, text}) => {
  const configLoader = {
    size: 'giant',
    status: transparent ? 'basic' : 'primary',
  };

  const configText = {
    appearance: 'hint',
    category: 's2',
  };

  const configStyles = transparent ? {...styles.transparent} : {};
  
  return (
    <Layout style={{...styles.container, ...configStyles}} level="2">
      <Spinner {...configLoader} />
      <Text {...configText}>{text}</Text>
    </Layout>
  );
};

export default Loader;
