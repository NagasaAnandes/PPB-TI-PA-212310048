import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
    return (
        <View style={[styles.search_box]}>
            <FontAwesome5 name={"search"} size={25} color="grey"/>
            <TextInput style={[styles.seacrh_input]} placeholder='Search' />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create ({
    search_box: {
        padding: 10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:"grey",
        borderRadius:10,
        backgroundColor:"#f0f0f0"
    },
    seacrh_input:{
        fontSize:18,
        width:"90%",
        color:"grey",
        marginLeft:10
    }
});
