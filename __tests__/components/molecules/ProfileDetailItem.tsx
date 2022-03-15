import React from 'react';
import {render} from '@testing-library/react-native';

import ProfileDetailItem from '../../../src/components/molecules/ProfileDetailItem';

test('if profile detail item renders correctly', () => {
  const {getByText} = render(
    <ProfileDetailItem label={'Name'} value={'Hamza Sarı'} />,
  );

  expect(getByText('Name')).toBeTruthy();
  expect(getByText('Hamza Sarı')).toBeTruthy();
});
