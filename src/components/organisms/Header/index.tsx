import React from 'react';
import {GestureResponderEvent} from 'react-native';

import BackButton from '../../molecules/BackButton';
import CompanyLogoWithName from '../../molecules/CompanyLogoWithName';

import {HeaderContainer} from './styles';

interface Props {
  showBackIcon?: boolean;
  onBackButtonPressHandler?: (event: GestureResponderEvent) => void;
}

/**
 * Header Component
 *
 * @description This component will be shown on top of the every page, and if it is a child page then it will render a back button
 * @param props props object
 * @returns Header Component
 */
const Header = (props: Props) => {
  return (
    <HeaderContainer>
      {props.showBackIcon && (
        <BackButton onBackButtonPressHandler={props.onBackButtonPressHandler} />
      )}
      <CompanyLogoWithName />
    </HeaderContainer>
  );
};

export default React.memo(Header);
