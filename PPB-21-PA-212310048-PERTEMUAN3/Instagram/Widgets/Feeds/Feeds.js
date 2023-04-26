import React from 'react';
import { ScrollView, View } from 'react-native';
import FeedsLayout from './FeedsLayout';
import { Users } from '../../../components/const-data/Users';

const Feeds = () => {
    return (
        <ScrollView>
            {Users.map((v,index)=>(
                <FeedsLayout items={v} key={index} />
            ))}
        </ScrollView>
    );
}

export default Feeds;