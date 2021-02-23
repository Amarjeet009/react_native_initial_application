import React, {useState} from "react";
import { Text, StyleSheet, View, Button,ScrollView, Image, Dimensions } from "react-native";

const Separator = () => (
    <View style={styles.separator} />
  );
  
// ImageDetails = ({imageSource,imageName, imageScore}) we can also use this

const ImageDetails = (imageNames) => {
    var counterButton;
    const [counter, setCounter] = useState(0);
    if(counter >= 10) {
        counterButton=   <Button title='Set your image score' onPress={() => {
         setCounter(counter - 9)
     }} />
     } else {
        counterButton = <Button title='Set your image score' onPress={() => {
         setCounter(counter + 1)
     }} />
     }
    return (
        <ScrollView> 
        <Image source={imageNames.imageSource} />
        <Text style={styles.textTitle}>Image Details of {imageNames.imageName}</Text>
        <Text style={styles.text}>Image Score {imageNames.imageScore} / 10</Text>
        <Text style={styles.text}>You Score:  {counter} / 10</Text>
        {counterButton}
        <Separator />
        </ScrollView>
   )
}

const screenHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
      },
    text: {
      fontSize: 15,
    },
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#eaeaea",
        height: screenHeight
    },
    title: {
      fontSize: 15,
      textAlign: 'center',
      marginVertical: 8,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  });
  

export default ImageDetails;