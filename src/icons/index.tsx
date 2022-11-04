import React from 'react';
import {ImageProps} from 'react-native';
import {Icon} from '@ui-kitten/components';

const IconSVG = (
  props?: Partial<ImageProps>,
  nameIcon?: string,
): React.ReactElement<ImageProps> => <Icon {...props} name={nameIcon} />;

export default IconSVG;
