import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greetings = 'Hi, There... !!';
    const welcomeText = <Text style={welcomeStyle.textStyle}>Welcome To React Native World</Text>;
    const user = 'Amarjeet Rao';
    return (
        <View>
        <Text style={style.textStyle}>My First React Native Mobile App</Text>
        <Text style={userStyle.textStyle}>{greetings}</Text>
        {/* we can also use the pre defined jsx variable */}
        {welcomeText}
        <Text style={userStyle.textStyle}>Hello,  {user} !!</Text>
      
    </View>
    )
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#054B8E'
    }
});

const welcomeStyle =  StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: '#C6470F',
        fontWeight: 'bold',
        textAlign: 'center',
       
        
    }
});
 const userStyle = StyleSheet.create({
     textStyle: {
         fontSize: 30,
         color: '#D7703C',
         textAlign: 'center'
     }
 });

export default ComponentsScreen;