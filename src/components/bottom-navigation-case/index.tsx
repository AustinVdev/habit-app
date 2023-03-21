import React, {FC,useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {RoutesScreen} from '@routes/index';
import IconSVG from '@icons/index';

const BottomNavigationCase: FC = () => {
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const orderRoutes = [
    RoutesScreen.HOME,
    RoutesScreen.HABITS,
    RoutesScreen.TASK,
    RoutesScreen.CHECK_LIST,
    RoutesScreen.PROFILE,
  ];

  const handleSelectPage = (index: number) => {
    setSelectedIndex(index);

    const pushAction = StackActions.push(orderRoutes[index]);

    navigation.dispatch(pushAction);
  };

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => handleSelectPage(index)}>
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'home')}
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'hash')}
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'calendar')}
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'checkmark-square-2')}
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'person')}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationCase;
