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

const ProjectsScreen = ({
  fetchAllProjects,
  allProjects,
  postNewProject,
  deleteProject,
  navigation,
  logoutUser
}) => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [newProjectName, setNewProjectName] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchAllProjects();
    setFilteredProjects(allProjects);
  }, [allProjects.length]);

  //const inActiveProjects = allProjects.filter(project => project.isActive === true).length;
  //const activeProjects = allProjects.length - inActiveProjects;

  const handleSearch = searchText => {
    setSearchText(searchText);
    const filtered = allProjects.filter(project =>
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
      {modalVisible && (
        <ModalScreen
          text="Are you sure you want to delete the project?"
          buttonHandlerCancel={setModalVisible}
        />
      )}
      <Content padder contentContainerStyle={styles.content}>
        <SearchBar
          round
          clearIcon
          platform="default"
          showCancel
          lightTheme
          placeholder="Search projects..."
          containerStyle={{ backgroundColor: 'white' }}
          onChangeText={value => handleSearch(value)}
          value={searchText}
        />

        <Card>
          <CardItem bordered>
            <Input
              placeholder="Add a new Project"
              onChangeText={value => setNewProjectName(value)}
            />
            <Right>
              <TouchableOpacity
                onPress={() => postNewProject(newProjectName, true)}
                disabled={newProjectName.length <= 0}
              >
                <AntDesign name="pluscircleo" size={32} color="#377fff" />
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>

        <List>
          {filteredProjects.map((project, key) => (
            <ListItem key={key}>
              <Body>
                <Text style={styles.projectText}>{project.projectName}</Text>

                {project.isActive ? (
                  <Text note numberOfLines={1} style={styles.active}>
                    Active
                  </Text>
                ) : (
                  <Text style={styles.inActive}>Inactive</Text>
                )}
              </Body>

              <Button
                bordered
                success
                onPress={() =>
                  navigation.navigate('Project', {
                    projectId: project._id
                  })
                }
              >
                <Text>View</Text>
              </Button>

              <Button
                style={{ marginLeft: 5 }}
                bordered
                danger
                onPress={() => setModalVisible(true)}
              >
                <Text>Delete</Text>
              </Button>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content:{backgroundColor:COLOR.HGN_LIGHT_BLUE},
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


export default ProjectsScreen;
