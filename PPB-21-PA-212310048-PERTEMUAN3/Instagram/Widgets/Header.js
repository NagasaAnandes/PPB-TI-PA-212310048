import React from 'react';
import { Image, SafeAreaView, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require("../../assets/icons/instagram-text-icon.png")}
                    style={styles.img}/>
                <View style={styles.container2}>
                    <FontAwesome5 name='heart' size={25} color={"black"} style={{marginHorizontal: 10}}/>
                    <FontAwesome5 name='facebook-messenger' size={25} color={"black"}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    container2:{
        flexDirection:'row', 
        alignItems:'center'
    },
    img: {
        width: 110, 
        height:30, 
        marginVertical:10
    }
})