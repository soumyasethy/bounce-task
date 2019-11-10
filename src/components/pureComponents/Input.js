import React, {PureComponent} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CustomText from './Text';
import {COLORS} from '../../utils/Colors/Colors';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import {shadow} from '../../utils/Colors/Shadow';
import {IconNotVisible, IconVisible} from '../../assets';

interface InputProps {
  inputStyle?: object;
  fixedText?: string;
  placeholder?: string;
  wapperStyle?: object;
  editableValue?: string;
  showPassword?: boolean;
  multiline?: boolean;
  onChangeText?: any;
  style: any;
  editable?: boolean;
}
class Input extends PureComponent<InputProps> {
  constructor(props: Readonly<{}>) {
    super(props);
  }
  state = {
    hidePassword: true,
  };
  render() {
    return (
      <TouchableOpacity
        style={[shadow, styles.defaultStyle, this.props.wapperStyle]}
        onPress={() => this.inputRef.focus()}>
        <TextInput
          ref={input => {
            this.inputRef = input;
          }}
          multiline={this.props.multiline}
          autoCapitalize={'none'}
          onChangeText={text => this.props.onChangeText(text)}
          placeholder={this.props.placeholder}
          value={this.props.editableValue}
          underlineColorAndroid={'transparent'}
          style={[
            styles.defaultTextInputStyle,
            {textAlign: this.props.fixedText ? 'right' : 'left'},
            this.props.inputStyle,
          ]}
          {...this.props}
          secureTextEntry={
            this.props.secureTextEntry && this.state.hidePassword
          }
        />
        {!!this.props.fixedText && (
          <CustomText>{this.props.fixedText}</CustomText>
        )}
        {!!this.props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              this.setState({hidePassword: !this.state.hidePassword})
            }
            style={{
              width: s(50),
              height: mVs(50),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.state.hidePassword ? (
              <IconVisible width={s(20)} height={mVs(20)} />
            ) : (
              <IconNotVisible width={s(20)} height={mVs(20)} />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
}

export default Input;
const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    borderRadius: mS(8),
    width: '100%',
    height: mVs(50),
    backgroundColor: COLORS.white,
    paddingLeft: mS(10),
    paddingRight: mS(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  defaultTextInputStyle: {
    height: mVs(50),
    fontSize: mS(20),
    color: COLORS.black,
    marginLeft: 10,
    minWidth: mS(50),
  },
});
