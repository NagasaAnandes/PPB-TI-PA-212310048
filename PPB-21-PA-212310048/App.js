import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffects} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffff"></StatusBar>
      <ImageBackground
        source={{uri : 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80'}}
        style={{flex:0.5, }}>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#F8F9FC'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'}}
            style={{width: 150, height: 150, borderRadius: 150/2, borderWidth: 4, borderColor: '#F8F9FC', position: 'absolute'}}/>
        </View>
        <View>
          <Text 
          style={{fontWeight: 'bold',  fontSize: 25, textAlign: 'center', marginTop: 90,}}>
            Nagasa Anandes Putra Ramadhan
          </Text>
          <Text 
            style={{textAlign: 'center', fontSize: 18, marginTop: 10, marginBottom:20}}>
              212310048
          </Text>
          <View style={{marginLeft: 70}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', width:40, height: 40}}>
                <Icon name='mobile-alt' size={25} color="#4a4a4a"></Icon>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:"#4a4a4a"}}>
                  +62-895-xxxx-xxxx
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', width:40, height: 40}}>
                <Icon name='map-marker-alt' size={25} color="#4a4a4a"></Icon>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:"#4a4a4a"}}>
                  Bogor
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', width:40, height: 40}}>
                <Icon name='envelope' size={25} color="#4a4a4a"></Icon>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:"#4a4a4a"}}>
                  212310048@student.ibik.ac.id
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row', marginTop:20, marginHorizontal:20}}>
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <Icon name='facebook' size={25} color="#B2B2B2"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <Icon name='instagram' size={25} color="#B2B2B2"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <Icon name='linkedin' size={25} color="#B2B2B2"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <Icon name='twitter' size={25} color="#B2B2B2"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
              <Icon name='github' size={25} color="#B2B2B2"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
