import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import BackIcon from '../../atoms/BackIcon';

interface Props {
  onBackButtonPressHandler?: (event: GestureResponderEvent) => void;
}

/**
 * Back Button Component
 *
 * @description Container for back icon as a button
 * @param props props object
 * @returns Back Button Component
 */
const BackButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onBackButtonPressHandler}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default React.memo(BackButton);
