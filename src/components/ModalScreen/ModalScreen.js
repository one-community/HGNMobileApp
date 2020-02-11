import React, { useState, useEffect } from 'react';
import { Modal, View } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Badge,
  List,
  ListItem,
  Thumbnail,
  Card
} from 'native-base';

const ModalScreen = ({ text, buttonHandlerOK, buttonHandlerCancel }) => {
  // const [visible,setVisible]=useState(false)
  return (
    <Modal animationType="slide" visible={true} transparent={true}>
      <Card
        style={{
          position: 'absolute',
          height: 300,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          opacity: 1,
          bottom: 300,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 20,
          borderColor: 'red'
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 30
          }}
        >
          {text}
        </Text>

        <Body
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Button primary style={{ padding: 10 }} onPress={() => buttonHandlerOK()}>
            <Text>OK</Text>
          </Button>

          <Button
            danger
            style={{ marginLeft: 10, padding: 10 }}
            onPress={() => buttonHandlerCancel()}
          >
            <Text>Cancel</Text>
          </Button>
        </Body>
      </Card>
    </Modal>
  );
};

export default ModalScreen;
