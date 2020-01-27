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

const LoginScreen = props => {
  const [email, setEmail] = useState('siddharth.gore@live.com');
  const [password, setPassword] = useState('Siddharth@123');

  const { loginUser, isAuthenticated, navigation } = props;
  console.log('isAuthenticated', isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Hey');

      // props.navigation.navigate('AuthLoading');
    }
  }, [props.isAuthenticated]);

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
            <Input value={email} style={styles.input} />
          </Item>
          <Item fixedLabel last>
            <Label style={styles.label}>Password</Label>
            <Input secureTextEntry={true} value={password} style={styles.input} />
          </Item>
        </Form>
        <Button full primary onPress={() => loginUser({ email, password }, props.navigation)}>
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
  },
  pageTitle: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#55505C',
    alignSelf: 'center'
  },
  logo: {
    width: 215,
    height: 215,
    alignSelf: 'center',
    borderRadius: 10
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: COLOR.labelFontColor
  },
  input: { color: 'black', fontFamily: 'space-mono' }
});

export default LoginScreen;
