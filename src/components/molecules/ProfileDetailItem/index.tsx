import React from 'react';

import {ProfileDetailItemContainer, Label, Value} from './styles';

interface Props {
  label: string;
  value?: string;
}

/**
 * Profile Detail Item Component
 *
 * @description This component shows a profile detail information with a label and a value, such as name, email, company, ...
 * @param props props object
 * @returns Profile Detail Item Component
 */
const ProfileDetailItem = (props: Props) => {
  return (
    <ProfileDetailItemContainer>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </ProfileDetailItemContainer>
  );
};

export default React.memo(ProfileDetailItem);
