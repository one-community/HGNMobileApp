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
import { StyleSheet,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { COLOR } from '../../utils/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import _ from 'lodash';

const ProjectsScreen = ({ fetchAllProjects, allProjects, postNewProject,deleteProject }) => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [newProjectName, setNewProjectName] = useState('');

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

  //const url = `https://image-charts.com/chart?cht=p3&chs=400x200&chd=t:${activeProjects},${inActiveProjects}&chl=InActive|Active&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1&chtt=Projects+Status&chts=FF0000,20,r`;

  // <Card>
  // <WebView source={{ uri:url}} style={{ height:200}} /></Card>
  return (
    <Container>
      <Content padder>
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
            <Input placeholder="Add a new Project"  onChangeText={(value)=>setNewProjectName(value)}/>
            <Right>
            <TouchableOpacity onPress={()=>postNewProject(newProjectName,true)} disabled={newProjectName.length<=0}>
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
              <Right>
                <Button bordered danger onPress={()=>deleteProject(project._id)}>
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

ProjectsScreen.navigationOptions = ({ navigation }) => ({
  title: 'My Projects',

  headerStyle: {
    backgroundColor: COLOR.header
  },

  headerTintColor: COLOR.white,
  headerTitleStyle: {
    fontWeight: 'bold'
  }
});
export default ProjectsScreen;
