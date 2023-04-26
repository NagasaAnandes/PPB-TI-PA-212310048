import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import { Users } from '../components/const-data/Users';
import Header from './Widgets/Header';
import Story from './Widgets/Story/Story';
import Feeds from './Widgets/Feeds/Feeds';

export class HomePage extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <StatusBar/>
                <View style={styles.header}>    
                    <Header/>
                </View>
                <View style={styles.story}>
                    <Story Users={Users}/>
                </View>
                <View style={styles.feeds}>
                    <Feeds/>
                </View>
            </SafeAreaView>
        );
    }
}

export default HomePage;

const styles = StyleSheet.create ({
    header:{
        flex: 1,
        justifyContent:'center'
    },
    story:{
        flex: 2,
    },
    feeds:{
        display:'flex'
    }
})