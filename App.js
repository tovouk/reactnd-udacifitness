import * as React from "react";
import { View,Text, TouchableHighlight,StyleSheet,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import AddEntry from "./components/AddEntry";
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from './reducers'
import History from './components/History'

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello!')
  }

  render(){
    return (
      <Provider store={createStore(reducer)}>
        <View
          style={style.container}>
          <History />
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
