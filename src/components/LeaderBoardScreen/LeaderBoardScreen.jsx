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

const LeaderBoardScreen = ({
  getLeaderboardData,
  leaderBoardData,
  navigation,
  logoutUser,
  auth
}) => {
  const loggedInUserId = auth.user._id;

  useEffect(() => {
    if (loggedInUserId) {
      getLeaderboardData(loggedInUserId);
    }
  }, [loggedInUserId]);

  const handlePress = personId => {
    navigation.navigate('UserProfile', {
      userId: personId
    });
  };
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => logoutUser()} style={{ marginRight: 10 }}>
        <AntDesign name="logout" size={32} color="red" />
      </TouchableOpacity>
    )
  });

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <List>
          <ListItem itemHeader thumbnail>
            <Left>
             
                <Text style={{ color: 'white', fontWeight: 'bold',color:COLOR.HGN_DARK_GREEN }}>Hours</Text>
         
            </Left>
            <Body>
              <Text style={{ color: 'white', fontWeight: 'bold',color:COLOR.HGN_DARK_GREEN }}>Name</Text>
            </Body>
            <Right>
              <Text style={{ color: 'white', fontWeight: 'bold' ,color:COLOR.HGN_DARK_GREEN}}>Action</Text>
            </Right>
          </ListItem>
          {leaderBoardData.map((rowData, key) => (
            <ListItem thumbnail key={key}>
              <Left>
                <Badge style={{backgroundColor:'#f85c70'}}>
                  <Text >{rowData.totaltime_hrs}</Text>
                </Badge>
              </Left>
              <Body>
                <Text style={styles.name}>{rowData.name}</Text>
                <Text style={styles.subText} note numberOfLines={1}>
                  Weekly Commited Hours: {rowData.weeklyComittedHours}
                </Text>
              </Body>
              <Right>
                <Button transparent onPress={() => handlePress(rowData.personId)}>
                  <Text style={{color:COLOR.HGN_LIGHT_GREEN,fontWeight:'bold'}}>View</Text>
                </Button>
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
    backgroundColor: COLOR.SMOKE
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLOR.HGN_DARK_BLUE
  },
  logo: {
    width: 215,
    height: 215,
    alignSelf: 'center',
    borderRadius: 10
  },
  subText: {
    fontSize: 16,

    color: COLOR.HGN_LIGHT_BLUE,
    fontWeight:'bold'
  },
  input: { color: 'black', fontFamily: 'space-mono' }
});

export default LeaderBoardScreen;
