import React, {Component} from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import CustomText from '../pureComponents/Text';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import {Icon3DotMenu, Icon3DotMenuGrey} from '../../assets';
import {COLORS} from '../../utils/Colors/Colors';
import {View} from 'react-native';

export const PopupMenuOptionGrey = props => (
  <Menu
    style={{
      backgroundColor: COLORS.white,
    }}>
    <MenuTrigger>
      <Icon3DotMenuGrey
        height={mVs(20)}
        width={s(20)}
        style={{
          height: mVs(15),
          width: mVs(30),
          marginBottom: mS(15),
          marginLeft: mVs(60),
          marginTop: mS(-5),
        }}
      />
    </MenuTrigger>
    <MenuOptions style={{marginRight: -20}}>
      <MenuOption onSelect={() => alert(`Task cancelled`)}>
        <View style={{padding: mS(10)}}>
          <CustomText
            style={{
              color: COLORS.blackdark,
              fontSize: mS(15),
              fontWeight: '500',
            }}>
            Cancel Task
          </CustomText>
        </View>
      </MenuOption>
    </MenuOptions>
  </Menu>
);
export const PopupMenuOptionBlack = props => (
  <Menu style={{marginTop: mS(10)}}>
    <MenuTrigger>
      <Icon3DotMenu height={mVs(20)} width={s(20)} />
    </MenuTrigger>
    <MenuOptions>
      <MenuOption onSelect={() => alert(`Task cancelled`)}>
        <View style={{padding: mS(10)}}>
          <CustomText
            style={{
              color: COLORS.blackdark,
              fontSize: mS(15),
              fontWeight: '500',
            }}>
            Cancel Task
          </CustomText>
        </View>
      </MenuOption>
    </MenuOptions>
  </Menu>
);
