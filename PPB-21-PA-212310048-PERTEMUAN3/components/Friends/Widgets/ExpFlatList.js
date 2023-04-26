import React from 'react';
import { FlatList, View, Text } from 'react-native';
import UserItem from './UserItem';

const ExpFlatList = ({Users}) => {
    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize:20, margin:10}}>Friends</Text>
            <FlatList data={Users} renderItem={({item}) => <UserItem item={item}/> } />
        </View>
        
    );
}

export default ExpFlatList;
