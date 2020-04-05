import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

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
  Input,
  Badge,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const EditProfile = ({ navigation, user }) => {
  const [userProfile, setUserProfile] = useState(user);

  console.log('userProfile', userProfile);
  navigation.setOptions({
    headerRight: () => (
      <Button
        iconLeft
        light
        transparent
        onPress={() =>
          navigation.navigate('UsersList', {
            projectId: projectId
          })
        }
      >
        <Icon name="add" />
        <Text>Add Member</Text>
      </Button>
    )
  });
  return (
    <Container>
      <Content>
        <Form>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>First Name</Label>
            <Input style={styles.input} value={userProfile.firstName} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Last Name</Label>
          <Input style={styles.input} value={userProfile.lastName} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Email Address</Label>
          <Input style={styles.input} value={userProfile.email} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Phone Number</Label>
          <Input style={styles.input} value={userProfile.phoneNumber} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Phone Number</Label>
          <Input style={styles.input} value={userProfile.email} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Phone Number</Label>
          <Input style={styles.input} value={userProfile.email} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Phone Number</Label>
          <Input style={styles.input} value={userProfile.email} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
          <Label style={styles.label}>Phone Number</Label>
          <Input style={styles.input} value={userProfile.email} />
          </Item>

        </Form>
        <Button small block success>
          <Text> Update Profile </Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  formItem: { backgroundColor: '#db5a6b', paddingLeft: 20 },
  input: {
    backgroundColor: 'white'
  },
  label: { color: 'white', fontWeight: 'bold', }
});

export default EditProfile;
