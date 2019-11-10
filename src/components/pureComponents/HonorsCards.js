import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CustomText from './Text';
import {COLORS} from '../../utils/Colors/Colors';
import {mS, mVs} from '../../widgets/ResponsiveScreen';
import {FlatList, Image, View} from 'react-native';
import {honorList} from '../../userType';
import {IconCall247, IconHand, IconStar, IconTrophy} from '../../assets';

class HonorsCards extends PureComponent {
  _renderIcon = type => {
    if (type === 'star') return IconStar;
    else if (type === 'trophy') return IconTrophy;
    else if (type === 'hand') return IconHand;
  };
  _renderHonor = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: mS(10),
        }}>
        <View
          style={{
            width: mVs(60),
            height: mVs(60),
            borderRadius: mVs(30),
            backgroundColor: COLORS.blueFadedFaded,
            padding: mS(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: mVs(30),
              height: mVs(30),
            }}
            source={this._renderIcon(item.type)}
            defaultSource={this._renderIcon(item.type)}
            resizeMethod="scale"
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.blueFadedfadedFaded,
            paddingLeft: mS(10),
            paddingRight: mS(10),
            borderRadius: mS(10),
            marginTop: mS(-15),
          }}>
          <CustomText
            style={{fontSize: mS(12), color: COLORS.white, fontWeight: '500'}}>
            {item.text}
          </CustomText>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View>
        <CustomText
          style={{
            color: COLORS.whiteFaded,
            fontSize: mS(15),
            marginBottom: mS(10),
          }}>
          Honors
        </CustomText>
        <FlatList
          data={this.props.data}
          horizontal={true}
          keyExtractor={(item, index) => `honor${index}`}
          renderItem={this._renderHonor}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

HonorsCards.propTypes = {};

export default HonorsCards;
