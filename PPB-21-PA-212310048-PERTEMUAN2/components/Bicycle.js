import React from 'react';
import { Image, Text, View } from 'react-native';

function Bicycle(){
    const city = "South West";
    const peoples = [{name: "Nagasa", fams: "Big Brother"},
                    {name: "Putra", fams: "Litle Brother"}]
    return(
        <View>
            <Text>Hi I'm Bicycle</Text>
            <TakeARide peoples={peoples}/>
            {Place2Go(city)}
            <View>
                <Text>Fixie</Text>
                <Image
                    source={{
                        uri: "https://e1.pxfuel.com/desktop-wallpaper/402/206/desktop-wallpaper-fixie-sepeda-balap-sepeda-fixie-fixie-bike.jpg"
                    }}
                    style={{width:250, height:200}}
                />
            </View>
        </View>
    )
}

export default Bicycle;

const TakeARide = ({peoples}) => {
    return(
        <View>
            <Text>Let's go riding with us :</Text>
            {peoples.map((v,index)=>(
                <View key={index}>
                    <Text> {v.name} / my {v.fams} </Text>
                </View>
            ))}
        </View>
    ) 
};

function Place2Go (value) {
    return <Text>We are hoing to {value} now, come on.</Text>
};