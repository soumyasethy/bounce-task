import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import {COLORS} from '../../utils/Colors/Colors';
import {honorList, userRule} from '../../userType';
import TaskComponent from '../../components/pureComponents/TaskComponent';
import HonorsCards from '../../components/pureComponents/HonorsCards';
import HeaderTitleCard from '../../components/pureComponents/HeaderTitleCard';
import Header from '../../components/pureComponents/Header';
import {AppWrapper} from '../../components/hoc/AppWrapper';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import CustomText from '../../components/pureComponents/Text';

@inject('userStore')
@observer
class Home extends Component {
  render() {
    const {activeUser} = this.props.userStore;
    return (
      <View
        style={{
          backgroundColor: COLORS.blue,
          flex: 1,
        }}>
        <Header type={activeUser.type} />

        <HeaderTitleCard
          header={'Hello ' + activeUser.name + ','}
          title={activeUser.message}
          style={{paddingLeft: mS(20), paddingRight: mS(20)}}
        />
        {activeUser.type === userRule.NOOB && (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: mS(30),
            }}>
            <HeaderTitleCard
              header={'Worked for'}
              title={activeUser.worked}
              style={{flex: 1, marginLeft: mS(20)}}
            />
            <View
              style={{
                height: mVs(40),
                width: s(1),
                backgroundColor: COLORS.black,
              }}
            />
            <HeaderTitleCard
              header={'Tasks done'}
              title={activeUser.taskDone}
              style={{flex: 1, marginLeft: mS(20)}}
            />
          </View>
        )}
        <View
          style={{
            backgroundColor: COLORS.blueFaded,
            paddingTop: mS(20),
            paddingBottom: mS(20),
            marginTop: mS(30),
          }}>
          {activeUser.type === userRule.NOOB && (
            <View style={{paddingLeft: mS(20)}}>
              <HonorsCards data={activeUser.honors} />
            </View>
          )}

          <View style={{marginLeft: mS(20), marginRight: mS(20)}}>
            <TaskComponent data={activeUser.task} type={activeUser.type} />
          </View>
        </View>
      </View>
    );
  }
}

Home.propTypes = {};

export default AppWrapper(Home);
