import React from "react";
import { Text, View, StyleSheet, TextInput, Button, AsyncStorage } from "react-native";
import axios from "axios";
const URL = "https://mobile-server-ii.herokuapp.com";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  handleInputChange = (text, type) => {
    this.setState({ [type]: text });
  };
  signIn = () => {
    const { email, password } = this.state;
    axios
      .post(`${URL}/signin`, { email, password })
      .then(response => {
        // Navigate on successful signup.
        // Save token from server to AsyncStorage.
        const { token } = response.data;
        AsyncStorage.setItem("token", token);
        console.log("token", token);
        this.setState({
          email: "",
          password: ""
        });
        this.props.navigation.navigate("Content");
      })
      .catch(error => {
        this.setState({
          error: "Error signing up"
        });
        setTimeout(() => {
          this.setState({ error: null });
        }, 2000);
      });
  };

  render() {
    return (
      <View style={container}>
        <Text style={heading}>Sign In</Text>
        <TextInput
          onChangeText={text => this.handleInputChange(text, "email")}
          style={inputStyle}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={text => this.handleInputChange(text, "password")}
          style={inputStyle}
          value={this.state.password}
          type="password"
          placeholder="Password"
        />

        <Button onPress={() => this.signIn()} title="Sign In" />
        {this.state.error ? <Text style={errorText}>{this.state.error}</Text> : null}
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
  },
  heading: {
    fontSize: 20
  },
  inputStyle: {
    height: 35,
    width: 240,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  },
  errorText: {
    fontSize: 18,
    color: "red"
  }
});

const { container, inputStyle, heading, errorText } = styles;
