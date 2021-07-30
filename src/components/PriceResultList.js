import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PriceResult from './PriceResult';

const PriceResultList = (props) => {

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={props.results}
                keyExtractor={(business) => business.id}
                renderItem={({ item }) => {
                    return <PriceResult result={item} />
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default PriceResultList;

