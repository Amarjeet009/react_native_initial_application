import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from './components/ColorCounter'

const COLOR_INCREAMENT = 15;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => {
                    if (red + COLOR_INCREAMENT > 255) {
                        return;
                    }
                    setRed(red + COLOR_INCREAMENT)
                }}
                onDecrease={() => {
                    if (red - COLOR_INCREAMENT < 0) {
                        return;
                    }
                    setRed(red - COLOR_INCREAMENT)
                }}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => {
                    if (blue + COLOR_INCREAMENT > 255) {
                        return;
                    }
                    setBlue(blue + COLOR_INCREAMENT)
                }}
                onDecrease={() => {
                    if (blue - COLOR_INCREAMENT < 0) {
                        return;
                    }
                    setBlue(blue - COLOR_INCREAMENT)
                }}
                color='Blue' />
            <ColorCounter
                onIncrease={() => {
                    if (green + COLOR_INCREAMENT > 255) {
                        return;
                    }
                    setGreen(green + COLOR_INCREAMENT)
                }}
                onDecrease={() => {
                    if (green - COLOR_INCREAMENT < 0) {
                        return;
                    }
                    setGreen(green - COLOR_INCREAMENT)
                }}
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

export default SquareScreen;