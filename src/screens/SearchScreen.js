import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import PriceResultList from '../components/PriceResultList';
import { ScrollView } from 'react-native-gesture-handler';



const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [businesses, setBusinesses] = useState([]);

    const filterByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price
        });
    }

    // api calls
    const searchAPI = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 30,
                term: term,
                location: 'vancouver'
            }
        });
        // .catch to handle errors
        // access the response json to set state on businesses collection
        setBusinesses(response.data.businesses);

    }

    useEffect(() => {
        searchAPI();
    }, [])

    console.log(businesses);
    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI()} />
            <ScrollView>
                <PriceResultList results={filterByPrice('$')} title='Budget Eats' />
                <PriceResultList results={filterByPrice('$$')} title='Average' />
                <PriceResultList results={filterByPrice('$$$')} title="Gettin' Pricey" />
                <PriceResultList results={filterByPrice('$$$$')} title='Once in a Blue Moon' />
            </ScrollView>

        </View>
    );
}

export default SearchScreen;