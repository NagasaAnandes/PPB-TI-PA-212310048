import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const StoryLayout = ({items}) => {
    return (
        <View style={styles.img}>
            <View>
                {items.gender === "M" ? (
                    <View>
                        <Image 
                        source={require("../../../assets/icons/icon-boy-1.png")}
                        style={styles.story_img} />
                    </View>
                ) : (
                    <Image
                        source={require("../../../assets/icons/icon-girl-1.png")}
                        style={styles.story_img} />
                )}
                {items.isread === true ? (
                    <View style={{...styles.stats_story, borderColor:"gray"}} />
                    ) : (
                    <View style={{...styles.stats_story, borderColor:"red"}} />
                )}
            </View>
            {items.gender === "M" ? (
                <Text style={{color:"black"}}> {items.name} </Text>
            ) : (
                <Text style={{color:"black"}}>{items.name}</Text>
            )}
        </View>
    );
}

export default StoryLayout;

const styles = StyleSheet.create({
    img:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginHorizontal:10,
    },
    story_img:{
        width: 65,
        height: 65,
        borderRadius:100,
        backgroundColor:"white",
    },
    stats_story: {
        width: 65, 
        height: 65,
        borderRadius:100,
        borderWidth: 3,
        position:'absolute'
    }
})