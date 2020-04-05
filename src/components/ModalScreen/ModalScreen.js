import React, { useState, useEffect } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { COLOR } from '../../utils/colors';
import { Button, Body, Text, Card,CardItem } from 'native-base';

const ModalScreen = ({ modal, closeModal }) => {
  return (
    <Modal animationType="slide" visible={modal.open} transparent={true}>
      <Card  style={styles.container}>
        <Text style={styles.message}>{modal.message}</Text>

 
        <Body  style={styles.buttonsContainer}>
        <Button primary style={styles.buttonStyle} onPress={() => modal.confirmFunction()}>
          <Text style={styles.confirm}>OK</Text>
        </Button>

        <Button
          danger
          style={{ ...styles.buttonStyle, marginLeft: 10 }}
          onPress={() => closeModal()}
        >
          <Text style={styles.cancel}>Cancel</Text>
        </Button>
      </Body>

  
   
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
   
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.RED,
 
    bottom: 300,
    alignSelf: 'center',
    borderRadius: 5,
    padding:10
  },
  message: {
    color: 'white',
    fontSize: 20,
    padding: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE,
    width:'100%'
  },
  buttonStyle: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLOR.SMOKE,
  },
  cancel:{
    color: COLOR.RED,
    fontWeight:'bold',
    fontSize:18

  },
  confirm:{
    color: COLOR.HGN_LIGHT_GREEN,
    fontWeight:'bold',
    fontSize:18
  }
});
export default ModalScreen;
