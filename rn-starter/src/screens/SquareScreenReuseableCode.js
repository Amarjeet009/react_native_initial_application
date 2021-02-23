import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from './components/ColorCounter'

const COLOR_INCREAMENT = 15;
const SquareScreenReuseableCode = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        // if(color == 'red'){
        //     if(red + change> 225 || red + change <0){
        //         return;
        //     }else{
        //         setRed(red + change)
        //     }
        // }
        switch (color) {
            case 'red':
                red + change > 225 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 225 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 225 || green + change < 0 ? null : setGreen(green + change);
                return;
            default:
                return
        }
    }

    return (
        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREAMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREAMENT)}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREAMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREAMENT)}
                color='Blue' />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREAMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREAMENT)}
                color='Green' />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea",
        justifyContent: 'center',
        position: 'absolute',
        margin: 16,
        right: 10
    }
});

export default SquareScreenReuseableCode;