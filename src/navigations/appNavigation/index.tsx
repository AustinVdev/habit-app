import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/home';
import {RoutesScreen} from '@routes/index';
import Profile from '@screens/profile';
import Login from '@screens/login';
import BottomNavigationCase from '@components/bottom-navigation-case';
import useLoginContext from '@hooks/useLoginContext';
import Habits from '@screens/habits';
import Tasks from '@screens/tasks';
import CheckList from '@screens/check-list';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  const loginContext = useLoginContext();

  const isLogin = loginContext.state;

  return isLogin ? (
    <>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={RoutesScreen.HOME} component={Home} />
        <Screen name={RoutesScreen.HABITS} component={Habits} />
        <Screen name={RoutesScreen.TASK} component={Tasks} />
        <Screen name={RoutesScreen.CHECK_LIST} component={CheckList} />
        <Screen name={RoutesScreen.PROFILE} component={Profile} />
      </Navigator>
      <BottomNavigationCase />
    </>
  ) : (
    <Login />
  );
};

export default AppNavigator;
