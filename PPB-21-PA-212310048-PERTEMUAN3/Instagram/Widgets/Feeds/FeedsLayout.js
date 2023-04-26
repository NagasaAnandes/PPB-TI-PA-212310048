import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FeedsLayout = ({items}) => {
    return (
        <View>
            <View style={styles.avatar}>
                {items.gender === "M" ? (
                    <View>
                        <Image 
                        source={require("../../../assets/icons/icon-boy-1.png")}
                        style={styles.img_ava} />
                    </View>
                    ) : (
                    <Image
                        source={require("../../../assets/icons/icon-girl-1.png")}
                        style={styles.img_ava} />
                )}
                {items.isread === true ? (
                    <View style={{...styles.stats_story, borderColor:"gray"}} />
                    ) : (
                    <View style={{...styles.stats_story, borderColor:"red"}} />
                )}
                <Text style={styles.name_profil}> {items.name} </Text>
            </View>
            <View style={styles.feeds}>
                <Image
                    source={items.images}
                    style={styles.img_feeds}
                    />
            </View>
            <View style={styles.bottom_feeds}>
                <View style={styles.btn_feeds}>
                    <div>
                        <FontAwesome5 name='heart' size={25} color={"black"} />
                        <FontAwesome5 name='comment' size={25} color={"black"} style={{margin: 10}} />
                        <FontAwesome5 name='telegram-plane' size={25} color={"black"} />
                    </div>
                    <FontAwesome5 name='bookmark' size={25} color={"black"} />
                </View>
                <View style={styles.caption_feeds}>
                    <div style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'700', fontSize:16}}> {items.name} </Text> 
                        <Text style={{fontSize: 16}}> {items.caption} </Text>
                    </div>
                </View>
            </View>
        </View>
    );
}

export default FeedsLayout;

const styles = StyleSheet.create ({
    avatar:{
        display: 'flex',
        height: 60,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center'
    },
    img_ava: {
        width: 40, 
        height: 40,
        borderRadius:100,
        backgroundColor:"white",
        marginHorizontal: 10
    },
    stats_story: {
        width: 40, 
        height: 40,
        borderRadius:100,
        borderWidth: 2,
        marginHorizontal: 10,
        position:'absolute'
    },
    name_profil: {
        fontSize: 18,
        fontWeight: '500'
    },
    feeds: {
        display:'flex',
        height: 400,
    },
    img_feeds: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
    },
    bottom_feeds: {
        display:'flex',
        height: 100,
        backgroundColor: "white"
    },
    btn_feeds: {
        display:'flex',
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    caption_feeds: {
        display:'flex' ,
        backgroundColor: "white",
        paddingHorizontal: 10,
    },
})