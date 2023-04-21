import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class No4RCC extends Component {
    constructor(MyBio){
        super(MyBio);
        this.state={
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
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center'}}>With RCC</Text>
                <View style={[styles.container]}>
                    <Text style={[styles.header]}>My Identity</Text>
                    <Text>NPM : {this.state.identity.npm} </Text>
                    <Text>First Name : {this.state.identity.firstname} </Text>
                    <Text>Middle Name : {this.state.identity.middlename} </Text>
                    <Text>Last Name : {this.state.identity.lastname} </Text>
                </View>
                <View style={[styles.container]}>
                    <Text style={[styles.header]}>My Education</Text>
                    {this.state.education.map((education) => {
                        return(
                            <Text> {education.id}. {education.school} </Text>
                        )
                    })}
                </View>
                <View style={[styles.container]}>
                    <Text style={[styles.header]}>Contact Me</Text>
                    <Text>Mobile Phone : {this.state.mobile_phone} </Text>
                    <Text>Email : {this.state.email} </Text>
                </View>
                <View style={[styles.container]}>
                    <Text style={[styles.header]}>About Me</Text>
                    <Text>Gender : {this.state.gender} </Text>
                    <Text>Tall Body : {this.state.tall_body} CM </Text>
                    <Text>Wight Body : {this.state.weight_body} KG </Text>
                </View>
            </View>
        );
    }
}

export default No4RCC;

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    header: {
        fontSize:20,
        fontWeight:'500'
    }
})