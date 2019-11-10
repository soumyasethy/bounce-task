import React, {PureComponent} from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors/Colors';
import {mS} from '../../widgets/ResponsiveScreen';

interface CustomTextProps {
  style?: object;
  titleStyle?: object;
  isHeader?: boolean;
  children: string;
}
export default class CustomText extends PureComponent<CustomTextProps> {
  constructor(props: Readonly<CustomTextProps>) {
    super(props);
  }

  render() {
    return (
      <Text
        style={[
          styles.defaultStyle,
          this.props.style,
          this.props.titleStyle,
          this.props.isHeader ? styles.boldText : {},
        ]}
        ellipsizeMode="middle"
        numberOfLines={1}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    color: COLORS.black,
    fontSize: mS(20),
    //fontFamily: 'SFProText-Regular',
    // fontFamily: "vinchand"
  },
  boldText: {fontSize: mS(30), fontWeight: '700'},
});
