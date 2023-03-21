//Packages
import React, {FC} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';

//Components
import AppNavigator from '@navigations/appNavigation';
import RootProvider from '@ctx/providers';
import {myTheme} from '@themes/custom-theme';

const App: FC = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...myTheme}}>
      <RootProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </RootProvider>
    </ApplicationProvider>
  </>
);

export default App;
