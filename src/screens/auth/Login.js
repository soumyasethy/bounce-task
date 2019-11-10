import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import TextView from '../../components/pureComponents/Text';
import Input from '../../components/pureComponents/Input';
import {mS, mVs, s} from '../../widgets/ResponsiveScreen';
import Button from '../../components/pureComponents/Button';
import {IconRightChevron} from '../../assets/';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import {COLORS} from '../../utils/Colors/Colors';
import {AppWrapper} from '../../components/hoc/AppWrapper';
import {shadow} from '../../utils/Colors/Shadow';
import {validateEmail} from '../../utils/EmailValidator';
import Snackbar from 'react-native-snackbar';
import CustomText from '../../components/pureComponents/Text';
import {IconLogo} from '../../assets';

const _renderIcon = <IconRightChevron height={mVs(10)} width={s(10)} />;

@inject('userStore')
@observer
class Login extends Component {
  @observable userName = '';
  @observable password = '';
  @observable loginError;
  @observable userError = {};
  @observable passwordError = {};
  @observable userNamePlaceholder = 'Email';
  @observable passwordPlaceholder = 'Password';

  checkUser = (userName, password) => {
    let {users} = this.props.userStore;
    const validUser = users.find(user => {
      return user.email === userName && user.password === password;
    });
    setTimeout(() => this.props.setLoading(false), 500);
    this.props.setLoading(false);
    if (validUser) {
      this.props.userStore.setActiveUser(validUser);
      setTimeout(() => this.props.navigation.navigate('Home'), 50);
    } else {
      Snackbar.show({
        title: 'Authentication Error!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLORS.black,
      });
    }
  };
  _login = () => {
    this.props.setLoading(true);
    if (!this.userName) {
      this.userError = {borderColor: COLORS.red, borderWidth: 1};
      this.userNamePlaceholder = 'Please enter your email';
      return;
    } else if (!this.password) {
      this.passwordError = {
        borderColor: COLORS.red,
        borderWidth: 1,
      };
      this.passwordPlaceholder = 'Please enter your password';
      return;
    }
    //Simulating Network calls
    this.checkUser(this.userName, this.password);
  };

  render() {
    return (
      <View
        style={{
          padding: mS(20),
          flex: 1,
          backgroundColor: COLORS.blue,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: mVs(150), height: mVs(100)}}
          defaultSource={IconLogo}
          source={IconLogo}
          resizeMethod="scale"
          resizeMode="contain"
        />

        <Input
          wapperStyle={{
            ...this.userError,
            fontSize: mS(20),
            marginTop: mS(25),
          }}
          onChangeText={userName => {
            this.userName = userName.trim();
            this.userError = validateEmail(this.userName)
              ? {borderColor: COLORS.red, borderWidth: 1}
              : {borderColor: COLORS.green, borderWidth: 1};
          }}
          value={this.userName}
          placeholder={this.userNamePlaceholder}
          inputStyle={{flex: 1}}
        />
        <Input
          secureTextEntry={true}
          wapperStyle={{
            ...this.passwordError,
            fontSize: mS(20),
            marginTop: mS(25),
          }}
          onChangeText={password => (this.password = password)}
          value={this.password}
          placeholder={this.passwordPlaceholder}
          inputStyle={{flex: 1}}
        />
        <Button
          style={[shadow, {marginTop: mS(30)}]}
          title={'Login'}
          onPress={this._login}
          iconRight={_renderIcon}
        />
      </View>
    );
  }
}

Login.propTypes = {};

export default AppWrapper(Login);
