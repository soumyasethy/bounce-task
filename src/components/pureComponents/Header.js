import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import {COLORS} from '../../utils/Colors/Colors';
import {IconCall247, IconCallNoob, IconLogo, IconMenu} from '../../assets';
import {userRule} from '../../userType';

class Header extends PureComponent {
  render() {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: mS(20),
        }}>
        <Image
          style={{
            width: s(20),
            height: mVs(20),
            backgroundColor: COLORS.red,
          }}
          defaultSource={IconMenu}
          source={IconMenu}
          resizeMethod="scale"
          resizeMode="cover"
        />
        {this.props.type === userRule.NOOB ? (
          <Image
            style={{
              width: s(20),
              height: mVs(20),
              backgroundColor: COLORS.red,
            }}
            source={IconCallNoob}
          />
        ) : (
          <Image
            style={{
              width: s(35),
              height: mVs(35),
              backgroundColor: COLORS.red,
            }}
            source={IconCall247}
            defaultSource={IconCall247}
            resizeMethod="scale"
            resizeMode="cover"
          />
        )}
      </View>
    );
  }
}

Header.propTypes = {};

export default Header;
