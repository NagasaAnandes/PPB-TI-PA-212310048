import React from 'react';
import { Image } from 'react-native';

const ItemImage = () => {
    return (
        <Image
            source={require("../../assets/man.png")}
            style={{width:150, height:150, borderColor:"#72FFFF", borderWidth:20}} 
        />
    );
}
export {ItemImage};