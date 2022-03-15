import React from 'react';

import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {Icon} from '../../../styles';

/**
 * Back Icon Component
 *
 * @description Component to show back icon
 * @returns Back Icon Component
 */
const BackIcon = () => {
  return <Icon icon={faCircleArrowLeft} size={32} />;
};

export default React.memo(BackIcon);
