import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ItemTyphograp } from '../Items/ItemTyphograp';
import { ItemImage } from '../Items/ItemImage';

class No2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ItemTyphograp/>
                <ItemImage/>
            </View>
        );
    }
}

export default No2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})