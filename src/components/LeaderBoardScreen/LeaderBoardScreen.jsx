import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

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

const LeaderBoardScreen = ({ getLeaderboardData, leaderBoardData,navigation }) => {
  console.log('Leaderborad data', leaderBoardData);

  useEffect(() => {
    getLeaderboardData();
  }, [leaderBoardData.length]);

  const handlePress = personId => {
    console.log('Person Id ', personId);

    navigation.navigate('UserProfile', {
      userId: personId,
      
    });
  };

  return (
    <Container>
      <Content padder  contentContainerStyle={styles.content}>
        <List>
        <ListItem itemHeader thumbnail >
        <Left>
        <Badge>
        <Text>Hours</Text>
      </Badge>
        </Left>
        <Body><Text>Name</Text></Body>
        <Right>
  <Text>Action</Text>
        </Right>
      </ListItem>
          {leaderBoardData.map((rowData, key) => (
            <ListItem thumbnail key={key}>
              <Left>
                <Badge>
                  <Text>{rowData.totaltime_hrs}</Text>
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
                  <Text>View</Text>
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
    
    backgroundColor:'#353535'
  },
  name: {

    fontWeight: 'bold',
    fontSize: 18,
    color: '#edd500',
   
  },
  logo: {
    width: 215,
    height: 215,
    alignSelf: 'center',
    borderRadius: 10
  },
  subText: {
    fontSize: 16,
    
    color: COLOR.white
  },
  input: { color: 'black', fontFamily: 'space-mono' }
});


LeaderBoardScreen.navigationOptions = ({ navigation }) => ({
  title: 'Leader Board',

  headerStyle: {
    backgroundColor: COLOR.header
  },

  headerTintColor: COLOR.white,
  headerTitleStyle: {
    fontWeight: 'bold'
  }
});

export default LeaderBoardScreen;
