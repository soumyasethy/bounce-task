import React, {useState, useEffect} from 'react';

import {SafeAreaView, ScrollView, Modal, StatusBar} from 'react-native';
import {NetworkStatus} from '../../widgets/NetInfo';
import {Loader} from '../../widgets/Loader';
import {COLORS} from '../../utils/Colors/Colors';
import {ModalHoc} from '../pureComponents/ModalsHoc';
import {mS} from '../../widgets/ResponsiveScreen';
export const AppWrapper = Component => props => {
  const [isLoading, setLoading] = useState(false);
  const [showModal, toggleModal] = useState(false);
  useEffect(() => {}, [isLoading, showModal]);

  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: mS(25), backgroundColor: COLORS.blue}}>
      <StatusBar
        translucent
        backgroundColor={COLORS.blue}
        barStyle="light-content"
      />
      <NetworkStatus />
      <ScrollView
        overScrollMode={'always'}
        style={[{flex: 1}, props.contentStyle]}
        contentContainerStyle={{flexGrow: 1}}>
        <Component {...props} isLoading={isLoading} setLoading={setLoading} />
      </ScrollView>
      {isLoading && <Loader />}
      <ModalHoc showModal={showModal} toggleModal={toggleModal} />
    </SafeAreaView>
  );
};
