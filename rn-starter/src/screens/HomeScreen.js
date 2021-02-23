import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const HomeScreen = ({ navigation }) => {
  return (<View style={styles.container}>
     <Text style={styles.text}>Hi there!</Text>
     <Separator />
    <Button  
    onPress={() => navigation.navigate('Components')}
    title='Components Page'
    />
    <Separator />
     <Button  
    onPress={() => navigation.navigate('List')}
    title='List Page'
    />
    <Separator />
     <Button  
    onPress={() => navigation.navigate('ImageList')}
    title='View Images'
    />
    <Separator />
    <Button  
    onPress={() => navigation.navigate('CountView')}
    title='View Count'
    />
    <Separator />
    <Button  
    onPress={() => navigation.navigate('Square')}
    title='Square Color Screen'
    />
    <Separator />
    <Button  
    onPress={() => navigation.navigate('SquareNew')}
    title='New Square Color Screen'
    />
     <Separator />
    <Button  
    onPress={() => navigation.navigate('SquareReducer')}
    title='New Square Color Screen With Reducer'
    />
    <Separator />
    <Button  
    onPress={() => navigation.navigate('Color')}
    title='Generate Random Color'
    />
    <Separator />
    <Button  
    onPress={() => navigation.navigate('Box')}
    title='Flex Box'
    />
     <Separator />
    {/*  */}
    <Button  
    onPress={() => navigation.navigate('TextS')}
    title='Input Fields'
    />
     <Separator />
     {/* laso we can use as a button */}
    <TouchableOpacity  onPress={() => console.log('Button Pressed TouchableOpacity')}>
      <Text style={styles.title}> Hello TouchableOpacity console log check</Text>
    </TouchableOpacity>
        </View>)


};

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

export default HomeScreen;
