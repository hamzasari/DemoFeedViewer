import React from 'react';

import {StyledText} from './styles';

/**
 * Company Name Component
 *
 * @description A simple component to show hardcoded name of company
 * @returns Company Name Component
 */
const CompanyName = () => {
  return <StyledText>Company Name</StyledText>;
};

export default React.memo(CompanyName);
