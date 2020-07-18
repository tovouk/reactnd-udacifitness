import * as React from "react";
import { View,Text, TouchableHighlight,StyleSheet,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import AddEntry from "./components/AddEntry";
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from './reducers'

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello!')
  }

  render(){
    return (
      <Provider store={createStore(reducer)}>
        <View
          style={style.container}>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
