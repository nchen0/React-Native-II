import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Content from "./Content";

const App = props => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sign Up" onPress={() => props.navigation.navigate("SignUp")} />
      <Button title="Sign In" onPress={() => props.navigation.navigate("SignIn")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Routes = createStackNavigator({
  App: { screen: App },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Content: { screen: Content }
});

export default Routes;
