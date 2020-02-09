import React, { useState, useEffect } from 'react';
import { StyleSheet, Image ,TouchableOpacity} from 'react-native';
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
  Input,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Separator,
  CheckBox
} from 'native-base';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';

const MyProfileScreen = ({ currentUserProfile }) => {
  // console.log('currentUserProfile', currentUserProfile);

  let {
    profilePic,
    email,
    phoneNumber,
    firstName,
    lastName,
    jobTitle,
    role,
    personalLinks = [],
    adminLinks = []
  } = currentUserProfile;
  lastName = 'Gore';
  firstName = 'Siddharth';
  return (
    <Container>
      <Content>
        <Card transparent>
          <CardItem>
            <Image
              source={{ uri: 'https://avatars2.githubusercontent.com/u/46716162?s=460&v=4' }}
              style={styles.profilePic}
              resizeMode="contain"
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.name}>
                {lastName}, {firstName}
              </Text>
              <Text style={styles.role}>{role}</Text>
            </Body>
          </CardItem>
        </Card>

        <List>
          <ListItem itemDivider>
           <MaterialIcons size={32} name='email' color='green'/>
          </ListItem>
          <ListItem>
            <Left>
            
            <Text style={styles.text}>{email}</Text>
            </Left>
    
            <Right>
              <Text style={styles.publiclyAccessible}>Publicly Accessible?</Text>
            </Right>
            <CheckBox checked={true} />
          </ListItem>

          <ListItem itemDivider>
          <MaterialIcons size={32} name='phone' color='green'/>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={styles.text}>{phoneNumber}</Text>
            </Left>
            <Right>
              <Text style={styles.publiclyAccessible}>Publicly Accessible?</Text>
            </Right>
            <CheckBox checked={true} />
          </ListItem>
          <ListItem itemDivider>
            <Text>Job Title:</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.text}>{jobTitle}</Text>
          </ListItem>
        </List>

        <Separator bordered>
          <Text>Admin Links:</Text>
        </Separator>
        <List>
          {!adminLinks.length && (
            <ListItem>
              <Text>You dont have any link present.</Text>
            </ListItem>
          )}
          {adminLinks.map((link, key) => (
            <ListItem key={key}>
              <Left>
                <Text>{link.Name}</Text>
              </Left>
              <Body>
                <Button transparent>
                  <Text>{link.Link}</Text>
                </Button>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>

        <Separator bordered>
          <Text>Personal Links:</Text>
        </Separator>
        <List>
          {!personalLinks.length && (
            <ListItem>
              <Text>You dont have any link present.</Text>
            </ListItem>
          )}
          {personalLinks.map((link, key) => (
            <ListItem key={key}>
              <Left>
                <Text>{link.Name}</Text>
              </Left>
              <Body>
                <Button transparent>
                  <Text>{link.Link}</Text>
                </Button>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  publiclyAccessible: { fontSize: 12 },
  text: {
    color: '#9D69A3',
    fontWeight: '600',
    fontFamily: 'space-mono',
    fontSize: 16
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 5
  },
  role: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
    margin: 5
  },
  profilePic: { height: 200, width: 100, flex: 1 }
});

MyProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'My Profile',

  headerStyle: {
    //backgroundColor: COLOR.header
  },
  headerRightContainerStyle: {
    paddingRight: 10
  },
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate("storiesList")}>
      <Ionicons name="ios-search" size={25} color="blue" left={20} />
    </TouchableOpacity>
  )

,
  // headerTintColor: COLOR.white,
  headerTitleStyle: {
    fontWeight: 'bold'
  }
});

export default MyProfileScreen;
