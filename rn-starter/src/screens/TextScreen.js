import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    //  console.log(value);
    return (
        <View style={styles.container}>
            <Text>Enter Value: </Text>
            <TextInput style={styles.inputBox}
                autoCapitalize='none'
                onChangeText={text => setName(text)}
                value={name}
            />
            <Text>Entered Value Is {name}</Text>
            {name.length> 0 && name.length < 4 ? <Text style={styles.validateAlert}>User Name should be upto 4 characters</Text> : null}
            <Text></Text>

            <Text>Enter Value: </Text>
            <TextInput style={styles.inputBox}
                autoCapitalize='none'
                onChangeText={newPassword => setPassword(newPassword)}
                value={password}
            />
            <Text>Entered Value Is {password}</Text>
            {password.length > 0 && password.length < 8 ? <Text style={styles.validateAlert}>Password Must be at 8 characters</Text> : null}

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea",
        justifyContent: 'center',
        position: 'absolute',
        margin: 16,
        right: 10
    },
    inputBox:
    {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 350
    },
    validateAlert: {
        fontSize: 20,
        color: '#CB4335'
    }
});

export default TextScreen;