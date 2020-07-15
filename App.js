import * as React from "react";
import { View, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import LotsOfGreetings from './Greetings'

export default class App extends React.Component {
  componentDidMount(){
    console.log("Before")
    //debugger
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
        <Ionicons name='ios-pizza' color='red' size={100}/>
      </View>
    )
  }
}
