import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Button, Text } from 'native-base';

const LoginScreen = () => {
  return (
    <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
  );
};

export default LoginScreen;
