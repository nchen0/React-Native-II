import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SignUp, SignIn, Contents } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
        <Text style={homeHeader}>This is the Home Component</Text>
        <View style={buttonWrapper}> 
          <Button title="Sign In"  onPress={() => navigate('SignIn')}/>
          <Button title="Sign Up"  onPress={() => alert('Pressed Button')}/>
          <Button title="Contents"  onPress={() => alert('Pressed Button')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeHeader: {
    fontSize: 25,
    color: 'white'
  }, 
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

const { container, homeHeader, buttonWrapper } = styles;

const Routes = StackNavigator({
  Home: { screen: App },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp},
  Contents: { screen: Contents },
});

export default Routes;