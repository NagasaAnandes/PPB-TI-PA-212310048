import React from 'react';
import { Text, View } from 'react-native';

var name =  "Honda";
const Motorcycle = () => {
    return (
        <View>
            <Text>Hi I'm Motorcycle</Text>
            <Text>Merk : {name} </Text>
            <Text>Type : {types.type} </Text>
            <Text>Model : {types.model} </Text>
            <Text>Price : Rp {types.price} </Text>
        </View>
    );
}

export default Motorcycle;
const types = {type:"Super Sport", model:"CBR1000RR-R", price:1000000000}