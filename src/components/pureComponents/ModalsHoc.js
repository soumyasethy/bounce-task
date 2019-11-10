import {Modal, SafeAreaView} from 'react-native';
import CustomText from './Text';
import React from 'react';

export const ModalHoc = props => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.showModal}
    onRequestClose={() => {
      props.toggleModal(!props.showModal);
    }}>
    <SafeAreaView style={{flex: 1}}>
      <CustomText>Hello world</CustomText>
    </SafeAreaView>
  </Modal>
);
