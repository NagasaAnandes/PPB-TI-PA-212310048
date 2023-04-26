import React from 'react';
import { ScrollView} from 'react-native';
import StoryLayout from './StoryLayout';

const Story = ({Users}) => {
    return (
        <ScrollView horizontal={true}>
            {Users.map((v,index)=>(
                <StoryLayout items={v} key={index} />
            ))}
        </ScrollView>
    );
}

export default Story;