import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const No4RFC = () => {
    const MyBio ={
        identity:{
            npm: 212310048,
            firstname: "Nagasa",
            middlename: "Anandes",
            lastname: "Putra Ramadhan",
        },
        education:[
            {id:1, school: "SDSN 13 Sunter Agung Jakarta"},
            {id:2, school: "SMPN 34 Jakarta"},
            {id:3, school: "SMK Taruna Terpadu 1 Bogor"}
        ],
        mobile_phone: '089520013456',
        email: "212310048@student.ibik.ac.id",
        gender: "Male",
        tall_body: 175,
        weight_body: 75
    }
    return (
        <View style={{flex:1}}>
            <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center'}}>With RFC</Text>
            <View style={[styles.container]}>
                <Text style={[styles.header]}>My Identity</Text>
                <Text>NPM : {MyBio.identity.npm} </Text>
                <Text>First Name : {MyBio.identity.firstname} </Text>
                <Text>Middle Name : {MyBio.identity.middlename} </Text>
                <Text>Last Name : {MyBio.identity.lastname} </Text>
            </View>
            <View style={[styles.container]}>
                <Text style={[styles.header]}>My Education</Text>
                {MyBio.education.map((education) => {
                    return(
                        <Text> {education.id}. {education.school} </Text>
                    )
                })}
            </View>
            <View style={[styles.container]}>
                <Text style={[styles.header]}>Contact Me</Text>
                <Text>Mobile Phone : {MyBio.mobile_phone} </Text>
                <Text>Email : {MyBio.email} </Text>
            </View>
            <View style={[styles.container]}>
                <Text style={[styles.header]}>About Me</Text>
                <Text>Gender : {MyBio.gender} </Text>
                <Text>Tall Body : {MyBio.tall_body} CM </Text>
                <Text>Wight Body : {MyBio.weight_body} KG </Text>
            </View>
        </View>
    );
}

export default No4RFC;

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    header: {
        fontSize:20,
        fontWeight:'500'
    }
})