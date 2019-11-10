import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {COLORS} from '../../utils/Colors/Colors';
import {mS} from '../../widgets/ResponsiveScreen';
import CustomText from './Text';

class ImageTitleSubtitleCard extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            backgroundColor: COLORS.red,
            height: mS(25),
            width: mS(25),
          }}
          source={this.props.icon}
          defaultSource={this.props.icon}
          resizeMethod="scale"
          resizeMode="cover"
        />
        <View style={{flexDirection: 'column', marginLeft: mS(5)}}>
          <CustomText
            style={[
              {
                fontSize: mS(12),
                fontWeight: '700',
                color: COLORS.black,
              },
              this.props.titleStyle,
            ]}>
            {this.props.title}
          </CustomText>
          <CustomText style={{fontSize: mS(10)}}>
            {this.props.subTitle}
          </CustomText>
        </View>
      </View>
    );
  }
}

ImageTitleSubtitleCard.propTypes = {};

export default ImageTitleSubtitleCard;
