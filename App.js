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
    flex: 1,
          justifyContent: "center",
          alignItems: "center",
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
})
