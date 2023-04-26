import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import SearchBar from './Widgets/SearchBar';
import ExpScrollView from './Widgets/ExpScrollView';
import ExpFlatList from './Widgets/ExpFlatList';
import ExpSectionList from './Widgets/ExpSectionList';
import { Users } from '../const-data/Users';

export class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <StatusBar/>
                <View style={[styles.header]}>
                    <SearchBar/>
                </View>
                <View style={[styles.body]}>
                    {/* <ExpScrollView Users={Users}/> */}
                    {/* <ExpFlatList Users={Users} /> */}
                    {/* <ExpSectionList Users={Users}/> */}
                </View>
            </SafeAreaView>
        );
    }
}

export default MyFriends;

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:"#000000"
    },
    header: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10,
        backgroundColor:"orange"
    },
    body: {
        flex:10,
        backgroundColor:"green"
    }
})