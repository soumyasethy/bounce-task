import React, {PureComponent} from 'react';
import {View, Dimensions /*Slider*/} from 'react-native';
import {COLORS} from '../../utils/Colors/Colors';
import CustomText from '../pureComponents/Text';
import {mS} from '../../widgets/ResponsiveScreen';
import Slider from '../pureComponents/Slider';
import {IconNext} from '../../assets';
import Snackbar from 'react-native-snackbar';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class SliderComponent extends PureComponent {
  @observable slideValue = 0;

  render() {
    const width = Dimensions.get('window').width;
    const sliderStyle = {
      sliderDummy: {
        backgroundColor: COLORS.red,
        width: 300,
        height: 40,
        borderRadius: 40,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      },
      sliderReal: {
        backgroundColor: COLORS.green,
        width: (this.slideValue / 50) * 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
    return (
      <View style={{borderRadius: 50, overflow: 'hidden', marginTop: mS(20)}}>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          <View style={sliderStyle.sliderDummy}>
            <CustomText style={{color: COLORS.white, fontWeight: '700'}}>
              START
            </CustomText>
          </View>
          <View style={sliderStyle.sliderReal}>
            <CustomText style={{color: COLORS.white, fontWeight: '700'}}>
              STARTED
            </CustomText>
          </View>
        </View>

        <Slider
          minimumTrackTintColor="transparent"
          thumbImage={IconNext}
          thumbStyle={{
            width: 40,
            height: 40,
            shadowColor: 'transparent',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.5,
            shadowRadius: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          thumbTintColor="transparent"
          thumbImageStyle={{width: 35, height: 35}}
          value={this.slideValue}
          onValueChange={value => {
            if (this.props.allowedToStart) {
              this.slideValue = value;
            } else {
              this.setState({slideValue: 0});
              setTimeout(() => {
                Snackbar.show({
                  title: 'You cannot start this task!',
                  duration: Snackbar.LENGTH_SHORT,
                  backgroundColor: COLORS.black,
                });
              }, 500);
            }
          }}
          minimumValue={0}
          maximumValue={50}
        />
      </View>
    );
  }
}

export default SliderComponent;
