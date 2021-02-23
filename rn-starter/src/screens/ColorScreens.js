import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {

    const [color, setColors] = useState([]);
    console.log('color', color);
    return (
    <View>
         <Button  
    onPress={() => setColors([...color, randomColor()])}
    title='Add Color'
    />
    <FlatList 
    keyExtractor={item => item}
    data = {color}
    renderItem={({ item })=>{
        return (<View style={{height: 100, width: 100, backgroundColor: item}} />);
    }}
    />
    </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    
});
export default ColorScreen;