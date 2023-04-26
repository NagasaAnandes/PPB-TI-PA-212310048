import React from 'react';
import { ScrollView, Text } from 'react-native';
import UserItem from './UserItem';

const ExpScrollView = ({Users}) => {
    return (
        <ScrollView>
            <Text style={{fontWeight:'bold', fontSize:20, margin:10}}>Friends</Text>
            {Users.map((v,index)=>(
                <UserItem item={v} key={index}/>
            ))}
        </ScrollView>
    )
}

export default ExpScrollView;