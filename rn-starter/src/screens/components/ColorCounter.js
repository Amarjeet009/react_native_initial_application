import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
const Separator = () => (
    <View style={styles.separator} />
  );
const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (<View>
      <Text style={styles.text}>{color}</Text>
      <Button 
      onPress={()=> onIncrease()}
      title={`Increase ${color}`} />
      <Separator />
      <Button  
      onPress={()=> onDecrease()} 
      title={`Decrease ${color}`} />
  </View>);
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: "center"
      },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
});

export default ColorCounter;