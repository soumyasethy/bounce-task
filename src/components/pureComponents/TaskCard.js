import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../utils/Colors/Colors';
import {mS, mVs, s, screenWidth} from '../../widgets/ResponsiveScreen';
import {View, Image} from 'react-native';
import CustomText from './Text';
import ImageTitleSubtitleCard from './ImageTitleSubtitleCard';
import {userRule} from '../../userType';
import Badge from './Badge';
import SliderComponent from './SliderComponent';
import {
  IconBattery,
  IconCall247,
  IconDown,
  IconHelmet,
  IconPetrol,
  IconScooty,
  IconUp,
} from '../../assets';
import {inject, observer} from 'mobx-react';
import {PopupMenuOptionGrey} from '../stateless/MenuPopup';

@inject('userStore')
@observer
class TaskCard extends PureComponent {
  _renderTaskIcon = type => {
    if (type === 'pickup')
      return (
        <Image
          style={{height: mVs(15), width: mVs(15), marginRight: mS(5)}}
          source={IconUp}
          defaultSource={IconUp}
          resizeMethod="scale"
          resizeMode="cover"
        />
      );
    else if (type === 'drop')
      return (
        <Image
          style={{height: mVs(15), width: mVs(15), marginRight: mS(5)}}
          source={IconDown}
          defaultSource={IconDown}
          resizeMethod="scale"
          resizeMode="cover"
        />
      );
  };
  render() {
    const {data} = this.props;
    const {activeUser} = this.props.userStore;

    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          width: '100%',
          borderRadius: mS(15),
          flexDirection: 'column',
          padding: mS(20),
          marginTop: mS(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              {activeUser.type === userRule.PRO &&
                this._renderTaskIcon(data.type)}
              <CustomText style={{fontWeight: '700', fontSize: mS(15)}}>
                {data.label}
              </CustomText>
            </View>
            <View style={{flexDirection: 'row', marginTop: mS(10)}}>
              <CustomText style={{fontWeight: '500'}}>
                {data.vehicleNo}
              </CustomText>
              {this.props.type === userRule.NOOB && (
                <Badge
                  text={'00S'}
                  textStyle={{fontSize: mS(10)}}
                  style={{
                    backgroundColor: COLORS.orange,
                    borderRadius: mS(5),
                    paddingLeft: mS(3),
                    paddingRight: mS(3),
                    paddingTop: mS(0),
                    paddingBottom: mS(0),
                  }}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: mS(5),
              }}>
              <CustomText style={{fontSize: mS(15)}}>
                {data.vehicleName}
              </CustomText>
              {this.props.type === userRule.NOOB && (
                <View
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: 2.5,
                    backgroundColor: COLORS.black,
                    marginLeft: mS(5),
                    marginRight: mS(5),
                  }}
                />
              )}
              {this.props.type === userRule.NOOB && (
                <CustomText style={{fontSize: mS(15)}}>
                  {data.vehicleModel}
                </CustomText>
              )}
            </View>

            {this.props.type === userRule.PRO && (
              <CustomText style={{fontSize: mS(15), marginTop: mS(5)}}>
                Booking ID:{' '}
                <CustomText style={{fontWeight: '500', fontSize: mS(15)}}>
                  {data.bookingId}
                </CustomText>
              </CustomText>
            )}
          </View>
          <View>
            {this.props.type === userRule.PRO && <PopupMenuOptionGrey />}
            <Image
              style={{
                backgroundColor: COLORS.grey777,
                height: mVs(85),
                width: mVs(85),
                marginTop: mS(-10),
              }}
              source={IconScooty}
              defaultSource={IconScooty}
              resizeMethod="scale"
              resizeMode="cover"
            />
          </View>
        </View>

        {this.props.type === userRule.NOOB && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: mS(20),
              marginBottom: mS(20),
            }}>
            <ImageTitleSubtitleCard
              title={'Yes'}
              subTitle={'30 mins ago'}
              icon={IconHelmet}
            />
            <ImageTitleSubtitleCard
              title={'2.5 L'}
              subTitle={'88 mins ago'}
              icon={IconPetrol}
            />
            <ImageTitleSubtitleCard
              title={'1.5 V'}
              titleStyle={{color: COLORS.orange}}
              subTitle={'01 mins ago'}
              icon={IconBattery}
            />
          </View>
        )}

        <SliderComponent allowedToStart={this.props.allowedToStart} />
      </View>
    );
  }
}

TaskCard.propTypes = {};

export default TaskCard;
