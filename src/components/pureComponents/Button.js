import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomText from './Text';
import {shadow} from '../../utils/Colors/Shadow';
import {mS, mVs} from '../../widgets/ResponsiveScreen';
import {COLORS} from '../../utils/Colors/Colors';

interface ButtonProps {
  style?: object;
  iconLeft?: any;
  iconRight?: any;
  title: string;
  titleStyle?: object;
  onPress?: any;
}
export default class Button extends PureComponent<ButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.defaultStyle, shadow, this.props.style]}
        onPress={this.props.onPress}>
        {this.props.iconLeft && (
          <View style={{marginRight: mS(10)}}>{this.props.iconLeft}</View>
        )}
        <CustomText
          titleStyle={[styles.defaultTextStyle, this.props.titleStyle]}>
          {this.props.title}
        </CustomText>
        {this.props.iconRight && (
          <View style={{marginLeft: mS(10)}}>{this.props.iconRight}</View>
        )}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {title: PropTypes.string.isRequired};
const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    height: mVs(50),
    width: '100%',
    borderRadius: mS(4),
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultTextStyle: {color: COLORS.white, fontWeight: '700', fontSize: 16},
});
