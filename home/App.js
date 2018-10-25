import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const App = props => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="SignUp" onPress={() => props.navigation.navigate("SignUp")} />
      <Button title="SignIn" onPress={() => props.navigation.navigate("SignIn")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Routes = createStackNavigator({
  App: { screen: App },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

export default Routes;
