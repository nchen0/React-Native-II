import React from "react";
import { Text, View, StyleSheet, FlatList, AsyncStorage } from "react-native";
const URL = "https://mobile-server-ii.herokuapp.com";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null
    };
  }

  componentDidMount() {
    const token = AsyncStorage.getItem("token");
    token
      .then(parsedToken => {
        console.log("parsed token is: ", parsedToken);
        axios
          .get(`${URL}/users`, {
            headers: {
              authorization: parsedToken
            }
          })
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
          .then(err => {
            console.log(err);
            this.setState({ error: "Error fetching users" });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.users);
    return (
      <View style={container}>
        <Text>User: </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.users}
          renderItem={({ item, key }) => {
            return (
              <View key={item._id}>
                <Text key={item._id}>{item.email}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  }
});

const { container } = styles;

export default Content;
