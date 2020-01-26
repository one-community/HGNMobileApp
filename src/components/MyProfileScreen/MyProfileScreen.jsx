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
  Input,
  Card,
  CardItem,
  Thumbnail,List,ListItem
} from 'native-base';
const MyProfileScreen = ({ currentUserProfile }) => {
  console.log('currentUserProfile', currentUserProfile);

  let { profilePic,email,phoneNumber,firstName,lastName,role } = currentUserProfile;
  lastName='Gore'
  firstName='Siddharth'
  return (
    <Container >
    <Content padder contentContainerStyle={{backgroundColor:'#F5F5F5'}}  >
    
      <Card transparent  >
     
        <CardItem style={{backgroundColor:'#F5F5F5'}} >
              <Image source={{uri: 'https://avatars2.githubusercontent.com/u/46716162?s=460&v=4'}} style={{height: 200, width: 100, flex: 1,borderRadius:10}} resizeMode='contain'/>
            </CardItem>
        <CardItem cardBody style={{backgroundColor:'#F5F5F5'}}>
        <Body >
        <Text style={styles.name}>{lastName}, {firstName}</Text>
        <Text style={styles.role}>{role}</Text>
        </Body>


      
        
      </CardItem>

      </Card>
      </Content>
      <Content >
      <List>
      <ListItem itemDivider>
        <Text >Email:</Text>
      </ListItem>                    
      <ListItem>
        <Text style={styles.text}>{email}</Text>
      </ListItem>
    
      <ListItem itemDivider>
        <Text>Phone Number:</Text>
      </ListItem>  
      <ListItem>
        <Text style={styles.text}>{phoneNumber}</Text>
      </ListItem>
    </List></Content>
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
  },
  text:{
    color:'#9D69A3',
    fontWeight:'600'
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
   alignSelf:'center',
   margin:5

  },
  role:{
    fontSize:18,
    fontWeight:'400',
   alignSelf:'center',
   margin:5
  }
});

export default MyProfileScreen;
