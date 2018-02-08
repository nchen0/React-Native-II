import React from 'React';
import axios from 'axios';
import { View, Text, StyleSheet, AsyncStorage, FlatList, ScrollView } from 'react-native';
const URL = 'https://mobile-server-ii.herokuapp.com/';

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null
    };
  }
  componentDidMount() {
    const token = AsyncStorage.getItem('token');
    token
      .then(parsedToken => {
        axios.get(`${URL}users`, {
          headers: {
            authorization: parsedToken
          }
        })
        .then(res => {
          const users = res.data;
          this.setState({
            users,
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({error: 'Error Fetching Users'});
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={container}>
        <ScrollView>
          <FlatList 
            data={this.state.users} 
            keyExtractor={(item) => item._id}
            renderItem={({item}) => { 
              return <Text>{item.email}</Text>
            }} 
          />
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { container } = styles;

export default Contents;