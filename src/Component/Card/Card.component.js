import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './Card.styles';
import config from './Card.config';

const Card = (props: Props): React.Node => (
  <TouchableOpacity
    style={[styles.container(props.theme), props.style]}
    onPress={props.onPress()}>
    {props.children}
  </TouchableOpacity>
);

Card.displayName = config.displayName;
Card.defaultProps = config.defaultProps;

export default Card;
