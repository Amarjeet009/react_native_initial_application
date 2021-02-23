import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from './components/ResultsList';
import SearchBar from './components/SearchBar';
import useSearchResult from "./hooks/useSearchResult";

const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useSearchResult();

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };


    return (
       <>
        {/* <View style={styles.container}> */}
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {results.length > 0?  <Text style={styles.text}>We have found {results.length} results</Text>: null}
           
            <ScrollView>
            <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cost Effective" 
            />
            <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier" 
            />
            <ResultsList 
            results={filterResultsByPrice('$$$')}
             title="Big Spender" 
             />
            </ScrollView>

        {/* </View> */}
        </>
        
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 15
    },
    container: {
        flex: 1
    }
});

export default SearchScreen;
