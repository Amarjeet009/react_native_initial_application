import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,FlatList,Image } from 'react-native';
import CallAPIs from "../api/CallAPIs";

const ResultShowScreent = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const id = navigation.getParam('id');

    const getResult = async id => {
        try {
            const response = await CallAPIs.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            setErrorMessage('Something went wrong with show record by id');
        }
    };

    useEffect(() => {
        getResult(id);
    }), [];

    if (!result) {
        return null;
    }
    return (<ScrollView style={styles.container}>
        <Text style={styles.name}>
        Restaurants : {result.name}
        </Text >
        <Text style={styles.name}>Contact : {result.phone}</Text>
        <Text> Rating: {result.rating}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
   
      <View style={styles.card}>
      <Text style={styles.name}>Address: {result.location.address1 != null ? result.location.address1 : null} {result.location.address2 != '' ? result.location.address2 : null} {result.location.address3 != '' ? result.location.address3: null}</Text>
      {result.location.city != ''? <Text style={styles.name}>City: {result.location.city}</Text>: null}
      {result.location.country != ''? <Text style={styles.name}>Country :{result.location.country}</Text> : null}
      {result.location.cross_streets != '' ? <Text style={styles.name}>Cross Streets :{result.location.cross_streets}</Text> : null}
      {result.location.state != '' ?  <Text style={styles.name}>State :{result.location.state}</Text> : null}
      {result.location.zip_code != ''?   <Text style={styles.name}>Zip: {result.location.zip_code}</Text> : null}
      </View>
    
     
    
    </ScrollView>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15
    },
    image: {
      width: 350,
      height: 220,
      borderRadius: 5,
      marginBottom: 5
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20
    },
    card:{
        width: 350,
        height: 220,
        backgroundColor: '#F8E3DE',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
      }
  });

export default ResultShowScreent;