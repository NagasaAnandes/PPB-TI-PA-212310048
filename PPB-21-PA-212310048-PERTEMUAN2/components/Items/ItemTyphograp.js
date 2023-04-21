import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const ItemTyphograp = () => {
    return (
        <View style={{borderWidth:1, width:186}}>
            <Text
                style={{
                    fontSize:20,
                    fontWeight:"bold",
                    backgroundColor:"brown",
                    color:"#fff",
                    textAlign:"center",
                    textDecorationLine:"underline",
                    padding:10,
                    marginBottom:10
                }}>
                History of Bicycle
            </Text>
            <Text style={styles.paragrapf}>
                A bicycle, also called a 
                <Text style={{...styles.paragrapf, color:"red"}}> pedal cycle</Text>, 
                <Text style={{...styles.paragrapf, fontWeight:"bold"}}> bike</Text>, 
                <Text style={{...styles.paragrapf, fontStyle:"italic"}}> push-bike or cycle</Text>, is a human-powered or
                motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
                or bicyclist.
            </Text>
        </View>
    );
};

export {ItemTyphograp};

const styles = StyleSheet.create({
    paragrapf :{
        fontSize:18,
        textAlign:"justify",
       }
})