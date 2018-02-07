import React from 'React';
import { View, Text, StyleSheet } from 'react-native';

const SignIn = props => {
  return (
    <View style={container}>
      <Text>
        {/* Fill in with a form to login and save the Token */}
        Hello From Sign In 
      </Text>
    </View>
  )
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

export default SignIn;