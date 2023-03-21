/**
 * @format
 */

import 'react-native';
import React, {FC} from 'react';
import * as eva from '@eva-design/eva';
import {myTheme} from '@themes/custom-theme';
import {ApplicationProvider} from '@ui-kitten/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Loader from '.';

const Wrapper: FC = ({children}) => (
  <ApplicationProvider {...eva} theme={{...eva.dark, ...myTheme}}>
    {children}
  </ApplicationProvider>
);

it('component ===> Loader', () => {
  renderer.create(
    <Wrapper>
      <Loader />
    </Wrapper>,
  );
});

it('component ===> Loader with prop transparent', () => {
  renderer.create(
    <Wrapper>
      <Loader transparent />
    </Wrapper>,
  );
});

it('component ===> Loader with prop text', () => {
  renderer.create(
    <Wrapper>
      <Loader text='hello' />
    </Wrapper>,
  );
});
