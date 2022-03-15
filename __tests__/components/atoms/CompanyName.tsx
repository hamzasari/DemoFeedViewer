import React from 'react';
import {render} from '@testing-library/react-native';

import CompanyName from '../../../src/components/atoms/CompanyName';

test('if company name renders', () => {
  const {getByText} = render(<CompanyName />);

  expect(getByText('Company Name')).toBeTruthy();
});
