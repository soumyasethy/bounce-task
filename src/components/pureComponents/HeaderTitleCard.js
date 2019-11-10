import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {mS} from '../../widgets/ResponsiveScreen';
import CustomText from './Text';
import {COLORS} from '../../utils/Colors/Colors';
import {View} from 'react-native';

class HeaderTitleCard extends PureComponent {
  render() {
    return (
      <View style={[{flexDirection: 'column'}, this.props.style]}>
        <CustomText style={{fontSize: mS(15), color: COLORS.whiteFaded}}>
          {this.props.header}
        </CustomText>
        <CustomText
          style={{
            fontSize: mS(18),
            fontWeight: '500',
            color: COLORS.white,
            marginTop: mS(5),
          }}>
          {this.props.title}
        </CustomText>
      </View>
    );
  }
}

HeaderTitleCard.propTypes = {};

export default HeaderTitleCard;
