import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

import { COLOR } from '../../utils/colors';
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
  Input
} from 'native-base';

const LoginScreen = ({loginUser}) => {
  const [email, setEmail] = useState('siddharth.gore@live.com');
  const [password, setPassword] = useState('Siddharth@123');





  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const isSupported = await LocalAuthentication.hasHardwareAsync();
  //     //console.log('isSupported',isSupported)
  //   };

  //   checkAuth();
  // }, []);

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://www.onecommunityglobal.org/wp-content/uploads/2019/12/HD-Circular-Logo-300x300-1.jpg'
          }}
        />
        <Text style={styles.pageTitle}>Highest Good Network</Text>

        <Form>
          <Item fixedLabel>
            <Label style={styles.label}>Email Address</Label>
            <Input value={email} />
          </Item>
          <Item fixedLabel last>
            <Label style={styles.label}>Password</Label>
            <Input secureTextEntry={true} value={password} />
          </Item>
        </Form>
        <Button full primary  onPress={()=>loginUser({ email, password })}>
          <Text> Login </Text>
        </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>© 2020 One Community Global</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'

    //backgroundColor:'#9D69A3'
  },
  pageTitle: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#55505C'
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: COLOR.labelFontColor
  }
});

export default LoginScreen;
