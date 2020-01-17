import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Aplication from './src/';

export default class App extends React.Component {

  state = { 
    fontLoaded: false,
  }

  async componentDidMount(){
    await Font.loadAsync({
      'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
    })
    this.setState({fontLoaded: true})
  }


  render() { 
    const {fontLoaded } = this.state;
    if (!fontLoaded) {
      return(<View><Text>Cargando fuente .......</Text></View>)
    }
    return (
      <Aplication/>
     );
  }

}

