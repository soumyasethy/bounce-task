import {View} from 'react-native';
import {mS} from '../../widgets/ResponsiveScreen';
import CustomText from '../pureComponents/Text';
import {COLORS} from '../../utils/Colors/Colors';
import {userRule} from '../../userType';
import Badge from '../pureComponents/Badge';
import TaskCardEmpty from '../pureComponents/TaskCardEmpty';
import React from 'react';

export const EmptyCard = props => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: mS(20),
          marginBottom: mS(10),
          alignItems: 'center',
        }}>
        <CustomText
          style={{
            color: COLORS.whiteFaded,
            fontSize: mS(15),
          }}>
          {props.type === userRule.NOOB
            ? props.count === 0
              ? 'No upcoming tasks'
              : 'No current task'
            : props.type === userRule.PRO
            ? 'No current Tasks'
            : 'Your upcoming Tasks'}
        </CustomText>

        <Badge text={props.count} />
      </View>
      <TaskCardEmpty type={props.type} count={props.count} />
    </>
  );
};
