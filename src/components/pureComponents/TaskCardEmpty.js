import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {COLORS} from '../../utils/Colors/Colors';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import CustomText from './Text';
import {userRule} from '../../userType';
import {IconCall247, IconTask} from '../../assets';

class TaskCardEmpty extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.blueFadedfadedFaded,
          padding: mS(20),
          borderRadius: mS(20),
          marginBottom: mS(10),
          marginTop: mS(20),
        }}>
        <Image
          style={{
            height: mVs(50),
            width: s(50),
          }}
          source={IconTask}
          defaultSource={IconTask}
          resizeMethod="scale"
          resizeMode="cover"
        />
        <CustomText
          style={{
            color: COLORS.whiteFaded,
            fontSize: mS(15),
            marginTop: mS(20),
          }}>
          {this.props.type === userRule.NOOB
            ? this.props.count === 0
              ? 'No upcoming tasks'
              : 'No current task'
            : this.props.type === userRule.PRO
            ? 'No current Tasks'
            : 'Your upcoming Tasks'}
        </CustomText>
      </View>
    );
  }
}

TaskCardEmpty.propTypes = {};

export default TaskCardEmpty;
