import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { COLOR } from '../../utils/colors';
import { Container, Content, Button, Icon, Text, Form, Item, Label, Input ,Toast} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const EditProfile = ({ navigation, user,updateUserProfile }) => {
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

  const handleUserProfile = (value, type) => {
    console.log(value, type);

    if (type === 'firstName') {
      setUserProfile({
        ...userProfile,
        firstName: value.trim()
      });
    }

    if (type === 'lastName') {
      setUserProfile({
        ...userProfile,
        lastName: value.trim()
      });
    }
  };

  const handleSubmit=async()=>{



    const submitResult = await updateUserProfile(
			userProfile._id,
		userProfile
    )
    
    if(submitResult===200)
    {
      Toast.show({
        text: 'Profile Succesfully Updated!',
        buttonText: 'Okay',
        position:'center',
        style:{backgroundColor:'green'}
      })
    }


  }

  const { firstName, lastName, email, phoneNumber } = userProfile;
  return (
    <Container>
      <Content>
        <Form>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>First Name</Label>
            <Input
              style={styles.input}
              value={firstName}
              onChangeText={fName => handleUserProfile(fName, 'firstName')}
            />
          </Item>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>Last Name</Label>
            <Input style={styles.input} value={lastName}
            onChangeText={lName => handleUserProfile(lName, 'lastName')} />
          
          </Item>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>Email Address</Label>
            <Input style={styles.input} value={email} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>Phone Number</Label>
            <Input style={styles.input} value={phoneNumber} />
          </Item>
          <Item fixedLabel style={styles.formItem}>
            <Label style={styles.label}>Job Title</Label>
            <Input style={styles.input} value={userProfile.email} />
          </Item>
        </Form>
        <Button small block success onPress={handleSubmit}>
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
  label: { color: 'white', fontWeight: 'bold' }
});

export default EditProfile;
