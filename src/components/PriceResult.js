import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const PriceResult = ({result}) => {


    const showDetail = (result) => {
        navigation.navigate('FoodDetail', result);
       
      }



    return (
        <View>
          {/* <FlatList
        keyExtractor={(business) => business.id}
        data={results}
        renderItem={({ item }) => {
            return (
            <Image onPress={()=> {showDetail(item)}} style={styles.image} source={{ uri: result.image_url }} />
            );
        }}
        />     */}
             <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{"Avg. "+result.rating+" Stars"}</Text>
            <Text style={styles.name}>{"From "+result.review_count+ " Reviews"}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    },
    rating:{
        fontWeight: 'normal'
    }
});

export default PriceResult;