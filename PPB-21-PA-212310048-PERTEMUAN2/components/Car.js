import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

export class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            merk : "Toyota",
            types:{type:"Matic", model:"Supra Mark 5"}
        }
    }

    Come2Go (value){
        return(
            <View>
                <Text>Let's go running away from duty</Text>
                <Text>with us only {value} IDR </Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View>
                <Text>Hi I'm Car</Text>
                <Text>Merk : {this.state.merk} </Text>
                <Text>Type : {this.state.types.type} </Text>
                <Text>Model : {this.state.types.model} </Text>
                {this.Come2Go(2000000000)}
            </View>

            </ScrollView>
            
        );
    }
}

export default Car;