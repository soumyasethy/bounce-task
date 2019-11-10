import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {COLORS} from '../../utils/Colors/Colors';
import {mS} from '../../widgets/ResponsiveScreen';
import CustomText from './Text';

class Badge extends Component {
  render() {
    return (
      <View
        style={[
          {
            backgroundColor: COLORS.blueFadedfadedFaded,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: mS(10),
            paddingRight: mS(10),
            paddingTop: mS(5),
            paddingBottom: mS(5),
            marginLeft: mS(5),
            borderRadius: mS(3),
          },
          this.props.style,
        ]}>
        <CustomText
          style={[
            {
              color: COLORS.white,
              fontSize: mS(15),
            },
            this.props.textStyle,
          ]}>
          {this.props.text}
        </CustomText>
      </View>
    );
  }
}

Badge.propTypes = {};

export default Badge;
