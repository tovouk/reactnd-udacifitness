import * as React from "react";
import { View, Text } from "react-native";
import LotsOfGreetings from './Greetings'

export default class App extends React.Component {
  componentDidMount(){
    console.log("Before")
    debugger
    console.log("After")
  }

  render(){
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}
