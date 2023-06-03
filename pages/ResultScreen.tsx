import React from 'react';
import { View, Text } from 'react-native';


const ResultScreen = ({ route }) => {

    const data = route.params || null;

    return (
      <View>
        <Text>Data in QRCode</Text> 
        <Text>{data}</Text> 
      </View>
    );
}
  
export default ResultScreen;