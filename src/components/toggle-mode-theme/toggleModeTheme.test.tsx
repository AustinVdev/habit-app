/**
 * @format
 */

import 'react-native';
import React, {FC} from 'react';
import * as eva from '@eva-design/eva';
import {myTheme} from '@themes/custom-theme';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ToggleModeTheme from '.';

const Wrapper: FC = ({children}) => (
  <ApplicationProvider {...eva} theme={{...eva.dark, ...myTheme}}>
    <IconRegistry icons={EvaIconsPack} />
    {children}
  </ApplicationProvider>
);

it('component ===> ToggleModeTheme', () => {
  renderer.create(
    <Wrapper>
      <ToggleModeTheme />
    </Wrapper>,
  );
});

it('component ===> ToggleModeTheme with prop isDarkMode', () => {
  renderer.create(
    <Wrapper>
      <ToggleModeTheme isDarkMode />
    </Wrapper>,
  );
});

it('component ===> ToggleModeTheme with prop onChange', () => {
  const handleChange = () => {};

  renderer.create(
    <Wrapper>
      <ToggleModeTheme onChange={handleChange} />
    </Wrapper>,
  );
});
