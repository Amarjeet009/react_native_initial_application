import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const CounterScreen = () => {
  /*this will give the changes in event or detact any event automatically, so we call useState props
  * let counter = 0; */

  /**
   * use the useState to realtime value detact
   */
  const [counter, setCounter] = useState(0);

  return (<View style={styles.container}>
    <Button title='Increase' onPress={() => {
      console.log('Increase : ', counter);
      // count++;
      setCounter(counter + 1);
    }}
    />
    <Separator />
    <Button title='Decrease' onPress={() => {
      console.log('Decrease : ', counter);
      //  count--;
      setCounter(counter - 1);
    }}
    />
    <Separator />
    <Text style={styles.text}>Current Count : {counter}</Text>
  </View>)
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    justifyContent: 'center',
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    justifyContent: 'center',
    position: 'absolute',
    margin: 16,
    right: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default CounterScreen;