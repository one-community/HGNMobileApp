import React, { useState, useEffect } from 'react';
import { StyleSheet, Image ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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

const MyProfileScreen = ({ currentUserProfile,navigation ,logoutUser}) => {
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
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => logoutUser()} style={{marginRight:10}}>
      <AntDesign name="logout" size={32} color="red"  />
    </TouchableOpacity>
    ),
  });





  return (
    <Container>
    <Content padder contentContainerStyle={styles.content}>
        <Card transparent>
          <CardItem>
    

            {profilePic ? (
              <Image
                source={{ uri: profilePic }}
                style={styles.profilePic}
                resizeMode="contain"
              />
            ) : (
              <Image
              source={require('../../../assets/images/profilePicTempate.png')}
              style={styles.profilePic}
              resizeMode="contain"
               
              />
            )}
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
           <MaterialIcons size={32} name='email' color={COLOR.HGN_LIGHT_GREEN}/>
          </ListItem>
          <ListItem>
            <Left>
            
            <Text style={styles.text}>{email}</Text>
            </Left>
    
            <Right>
              <Text style={styles.publiclyAccessible}>Publicly Accessible?</Text>
            </Right>
            <CheckBox checked={true} color={COLOR.HGN_LIGHT_GREEN} />
          </ListItem>

          <ListItem itemDivider>
          <MaterialIcons size={32} name='phone'color={COLOR.HGN_LIGHT_GREEN}/>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={styles.text}>{phoneNumber}</Text>
            </Left>
            <Right>
              <Text style={styles.publiclyAccessible}>Publicly Accessible?</Text>
            </Right>
            <CheckBox checked={true} color={COLOR.HGN_LIGHT_GREEN} />
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
  content: {
   /*  backgroundColor: COLOR.SMOKE */
  },
  publiclyAccessible: { fontSize: 12 },
  text: {
    color: COLOR.MEDIUM_BLUE,
    fontWeight: '600',
 
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



export default MyProfileScreen;
