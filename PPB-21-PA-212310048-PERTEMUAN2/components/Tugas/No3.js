import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

const No3 = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.container2]}>
                <Image
                    source={require('../../assets/LogoIBIK.png')}
                    style={{width:100, height:100}}/>
            </View>
            <Text style={{flex:1, color:'#ffffff'}}>Loading...</Text>
                
        </View>
    );
}

export default No3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#711A75',
        justifyContent:'center',
        alignItems:'center'
    },
    container2: {
        flex:9,
        justifyContent:'center'
    }
})