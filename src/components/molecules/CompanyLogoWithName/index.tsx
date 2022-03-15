import React from 'react';

import CompanyLogo from '../../atoms/CompanyLogo';
import CompanyName from '../../atoms/CompanyName';

import {CompanyNameContainer} from './styles';

/**
 * Company Logo with Name Component
 *
 * @description A very simple container to group company logo and name
 * @returns Company Logo with Name Component
 */
const CompanyLogoWithName = () => {
  return (
    <CompanyNameContainer>
      <CompanyLogo />
      <CompanyName />
    </CompanyNameContainer>
  );
};

export default React.memo(CompanyLogoWithName);
