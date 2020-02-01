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

const LeaderBoardScreen = ({ getLeaderboardData, leaderboardData }) => {
 console.log('Leaderborad data',leaderboardData)

  useEffect(() => {
    getLeaderboardData();
  }, [leaderboardData.length]);

  return (
    <Container>
      <Content padder>
        <List>
          {leaderboardData.map((rowData,key) => (
            <ListItem thumbnail key={key}>
              <Left>
                <Badge>
                  <Text>{rowData.totaltime_hrs}</Text>
                </Badge>
              </Left>
              <Body>
                <Text>{rowData.name}</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
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

export default LeaderBoardScreen;
