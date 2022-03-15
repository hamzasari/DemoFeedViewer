import React from 'react';

import {faAtom} from '@fortawesome/free-solid-svg-icons';

import {Icon} from '../../../styles';

/**
 * Company Logo Component
 *
 * @description Component to show company icon
 * @returns Company Logo Component
 */
const CompanyLogo = () => {
  return <Icon icon={faAtom} size={32} />;
};

export default React.memo(CompanyLogo);
