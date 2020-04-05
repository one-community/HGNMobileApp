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

import ModalScreen from '../ModalScreen';

import _ from 'lodash';

const UsersList = ({
  getAllUserProfiles,
  allUserProfiles,
  addProjectMember,
  route,
  navigation,
  openModal
}) => {
  const [filteredUsers, setFilteredUsers] = useState(allUserProfiles);
  const { projectId } = route.params;

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getAllUserProfiles();
    setFilteredUsers(allUserProfiles);
  }, [allUserProfiles.length]);

  const handleAddMember = async user => {
    const payload = {
      open: true,
      message: 'Are you sure you want to add this member?',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmFunction: () => {
        addProjectMember(projectId, user);
        navigation.navigate('Projects');
      }
    };
    await openModal(payload);
  };

  const handleSearch = searchText => {
    setSearchText(searchText);
    const filtered = allUserProfiles.filter(user =>
      (user.firstName + ' ' + user.lastName).toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredUsers(filtered);
  };
  // console.log(props)

  return (
    <Container>
      <Content padder>
        <SearchBar
          round
          clearIcon
          platform="default"
          showCancel
          lightTheme
          placeholder="Search users..."
          containerStyle={{ backgroundColor: 'white' }}
          onChangeText={value => handleSearch(value)}
          value={searchText}
        />

        <List>
          {filteredUsers.length === 0 && (
            <Text style={styles.projectText}>There are no members in this project.</Text>
          )}
          {filteredUsers.map((member, key) => (
            <ListItem key={key}>
              <Body>
                <Text style={styles.projectText}>
                  {member.firstName} {member.lastName}
                </Text>
              </Body>
              <Right>
                <Button bordered primary onPress={() => handleAddMember(member)}>
                  <Text>Add</Text>
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

const UsersList1 = ({ getAllUserProfiles, allUserProfiles, navigation, logoutUser }) => {
  const [filteredUsers, setFilteredUsers] = useState(allUserProfiles);

  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    getAllUserProfiles();
    setFilteredUsers(allUserProfiles);
  }, [allUserProfiles]);

  //const inActiveProjects = allProjects.filter(project => project.isActive === true).length;
  //const activeProjects = allProjects.length - inActiveProjects;

  const handleSearch = searchText => {
    setSearchText(searchText);
    const filtered = allUserProfiles.filter(project =>
      project.projectName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProjects(filtered);
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
      <Content padder>
        <List>
          {filteredUsers.map((user, key) => (
            <ListItem key={key}>
              <Body>
                <Text style={styles.projectText}>{user.firstName}</Text>

                {project.isActive ? (
                  <Text note numberOfLines={1} style={styles.active}>
                    Active
                  </Text>
                ) : (
                  <Text style={styles.inActive}>Inactive</Text>
                )}
              </Body>
              <Right>
                <Button bordered danger onPress={() => deleteProject(project._id)}>
                  <Text>Delete</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default UsersList;
