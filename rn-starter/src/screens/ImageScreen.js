import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetails from "./components/ImageDetails";


const ImageScreen = () => {
    return (<View>
        <ImageDetails 
        imageName='Forest' 
        imageSource={require('../../assets/images/forest.jpg')} 
        imageScore={9}
        />
        <ImageDetails 
        imageName='Beach' 
        imageSource={require('../../assets/images/beach.jpg')}
        imageScore={5}
        />
        <ImageDetails 
        imageName='Mountain' 
        imageSource={require('../../assets/images/mountain.jpg')}
        imageScore={8}
        />
        <ImageDetails 
        imageName='Animal' 
        imageSource={require('../../assets/images/animal.jpg')}
        imageScore={7}
        />

    </View>)
}

export default ImageScreen;