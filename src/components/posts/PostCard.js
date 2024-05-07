import {View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostCard = ({item, navigation}) => {
  const {height} = useWindowDimensions();

  function getRandomHexColor() {
    const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Random number between 0 and 255 for red
    const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Random number between 0 and 255 for green
    const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Random number between 0 and 255 for blue
    return `#${r}${g}${b}`; // Constructing the hexadecimal color code
  }
  
  // Example usage:
  const randomHexColor = getRandomHexColor();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Post', {item})}
      style={{
        backgroundColor: 'white',
        maxHeight: height / 5,
        marginVertical: 4,
        borderRadius: 12,
        elevation: 3,
        position: 'relative',
        overflow: 'hidden',
      }}>
     <View style={{justifyContent: 'center', alignItems:'center'}}>
     <Text
        style={{
          fontSize: 23,
          paddingHorizontal: 8,
          fontWeight: 'bold',
          color: '#000',
          marginTop: 5,
        }}
        numberOfLines={2}>
        {item.title}
      </Text>
     </View>
      <View style={{position: 'relative'}}>
        <View style={{marginTop: 10, paddingHorizontal: 12}}>
          <Text>Related Tags:</Text>
            {item.tags.map((item, index) => (
            <Text key={index} style={{color: randomHexColor, fontSize: 15}}>{item}</Text>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="thumbs-up" size={17} />
            <Text style={{marginLeft: 8}}>5550</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 8}}>
            <Icon name="comments" size={17} />
            <Text style={{marginLeft: 5}}>5550</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
