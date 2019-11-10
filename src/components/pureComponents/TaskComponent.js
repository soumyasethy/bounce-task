import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import CustomText from './Text';
import {COLORS} from '../../utils/Colors/Colors';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import ImageTitleSubtitleCard from './ImageTitleSubtitleCard';
import {honorList, userRule} from '../../userType';
import TaskCard from './TaskCard';
import Badge from './Badge';
import {EmptyCard} from '../stateless/EmptyCard';
import {Icon3DotMenu} from '../../assets';
import {
  PopupMenuOptionGrey,
  PopupMenuOptionBlack,
} from '../stateless/MenuPopup';

class TaskComponent extends PureComponent {
  _renderTask = item => {
    if (this.props.type === userRule.NOOB) {
      if (item.index === 0) {
        return (
          <View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CustomText
                style={{
                  color: COLORS.whiteFaded,
                  fontSize: mS(15),
                  marginBottom: mS(10),
                  marginTop: mS(20),
                }}>
                Current Task
              </CustomText>

              <PopupMenuOptionBlack />
            </View>

            <TaskCard
              type={this.props.type}
              data={item.item}
              allowedToStart={item.index === 0}
            />
          </View>
        );
      } else if (item.index === 1) {
        return (
          <View>
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
                Your upcoming Tasks
              </CustomText>
              <Badge
                text={
                  this.props.data.length === 0 ? 0 : this.props.data.length - 1
                }
              />
            </View>
            <TaskCard type={this.props.type} data={item.item} />
          </View>
        );
      } else {
        return <TaskCard type={this.props.type} data={item.item} />;
      }
    } else {
      if (item.index === 0) {
        return (
          <View
            style={{
              flexDirection: 'column',
              marginBottom: mS(10),
              marginTop: mS(5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: mS(10),
                alignItems: 'center',
              }}>
              <CustomText
                style={{
                  color: COLORS.whiteFaded,
                  fontSize: mS(15),
                }}>
                Current Task
              </CustomText>
              <Badge text={this.props.data.length} />
            </View>
            <TaskCard
              type={this.props.type}
              data={item.item}
              allowedToStart={true}
            />
          </View>
        );
      } else {
        return (
          <TaskCard
            type={this.props.type}
            data={item.item}
            allowedToStart={true}
          />
        );
      }
    }
  };
  _renderEmpty = () => {
    return (
      <EmptyCard
        type={this.props.type}
        count={this.props.data.length === 0 ? 0 : this.props.data.length - 1}
      />
    );
  };

  render() {
    return (
      <>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => `task${index}`}
          renderItem={this._renderTask}
          ListEmptyComponent={this._renderEmpty}
        />
        {this.props.type === userRule.NOOB &&
          this.props.data.length === 1 &&
          this._renderEmpty()}
      </>
    );
  }
}

TaskComponent.propTypes = {};

export default TaskComponent;
