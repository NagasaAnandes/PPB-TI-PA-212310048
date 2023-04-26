import React from 'react';
import UserItem from './UserItem';
import { SectionList, Text } from 'react-native';

const ExpSectionList = ({Users}) => {
    const data = [{title: "Suggestion", data: Users},
                  {title: "Followers", data: Users}];
    return (
        <SectionList sections={data}
            renderItem={({item}) => <UserItem item={item}/> }
            renderSectionHeader={({section: {title}}) => (
                <Text style={{color:"white"}}>{title}</Text>
            )}/>
    );
}

export default ExpSectionList;
