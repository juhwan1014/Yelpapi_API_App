import React from "react";
import {StyleSheet, Text, Image, FlatList, SafeAreaView } from 'react-native'
// import FoodItem from '../components/FoodItem'
import yelp from '../api/yelp2';

export default function FoodDetailScreen({route, navigation}){


    const [term, setTerm] = useState('')
    const [businesses, setBusinesses] = useState([]);




    // const detailAPI = async () => {
    //     const response = await yelp.get('/{id}', {
    //         params: {
    //             limit: 30,
    //             term: term,
    //             location: 'vancouver'
    //         }
    //     });
    //     // .catch to handle errors
    //     // access the response json to set state on businesses collection
    //     setBusinesses(response.data.businesses);

    // }

const {} = route.params

return (
<SafeAreaView style={styles.container}>
<Text style={styles.name}>{result.name}</Text>
<Image style={styles.image} source={{ uri: result.image_url }} />

</SafeAreaView>

)

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    image:{
        height: 300
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingLeft: 10
  },
  stepItem: {
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20
  }
  });