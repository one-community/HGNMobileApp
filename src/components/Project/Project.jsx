import React, { useState, useEffect } from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Button,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Icon
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { COLOR } from '../../utils/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import _ from 'lodash';

const Project = ({
  route,
  fetchAllMembers,
  projectMembers,
  navigation,
  addProjectMember,
  removeProjectMember,
  openModal
}) => {
  const projectId = route.params.projectId;

  useEffect(() => {
    fetchAllMembers(projectId);
  }, [projectId]);

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

  const handleRemoveMember = async user => {
    const payload = {
      open: true,
      message: 'Are you sure you want to remove this member?',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmFunction: () => {
        removeProjectMember(projectId, user);
        navigation.navigate('Projects');
      }
    };
    await openModal(payload);
  
  };

  //fetchAllMembers

  return (
    <Container>
      <Content padder>
        {projectMembers.length ? (
          <List>
            <ListItem itemDivider>
              <Text>Project Members</Text>
            </ListItem>
            {projectMembers.map((member, key) => (
              <ListItem key={key}>
                <Body>
                  <Text style={styles.projectText}>
                    {member.firstName} {member.lastName}
                  </Text>
                </Body>

                <Button
                  bordered
                  primary
                  onPress={() =>
                    navigation.navigate('UserProfile', {
                      userId: member._id
                    })
                  }
                >
                  <Text>View</Text>
                </Button>
                <Button
                  style={{ marginLeft: 10 }}
                  bordered
                  danger
                  onPress={() => handleRemoveMember(member)}
                >
                  <Text>Remove</Text>
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Card>
            <CardItem header>
              <Text>Sorry, No members Found</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Tap on the Add Member Button to add new members</Text>
              </Body>
            </CardItem>
          </Card>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  projectText: { color: 'black', fontWeight: '500' },
  inActive: {
    color: 'green',
    fontFamily: 'space-mono',
    fontSize: 14,
    fontFamily: 'space-mono',

    color: 'tomato'
  },
  active: { color: 'green', fontFamily: 'space-mono', fontSize: 14 }
});

export default Project;
