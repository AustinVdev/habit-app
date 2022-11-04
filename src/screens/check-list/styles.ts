import {StyleSheet} from 'react-native';

const maginTopButtom = {
  marginTop: 10,
  marginBottom: 10,
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    ...maginTopButtom,
    textAlign: 'center',
  },
  subTitleRecommended: {
    ...maginTopButtom,
  },
  section: {
    marginVertical: 10,
  }
});

export default styles;
