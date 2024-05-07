import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';


const Comments = ({item}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          borderBottomWidth: 1,
          borderColor: '#999',
          marginVertical: 5,
          backgroundColor: '#f9f9f9',
          padding: 3,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{height: 40, width: 40, borderRadius: 50}}
          />
          <Text style={{marginLeft: 8, color: '#333'}}>Maria Shekinah</Text>
          <Text style={{marginLeft: 5, color: '#888'}}>1d</Text>
        </View>
        <View style={{marginTop: 4, padding: 5, marginBottom: 6}}>
          <Text
            style={{fontSize: 15}}
            numberOfLines={showFullText ? undefined : 2}>
            {item.content}
          </Text>
          {item.content.length > 50 && ( // Adjust the threshold value as needed
            <TouchableOpacity onPress={toggleText}>
              <Text style={{color: 'blue'}}>
                {showFullText ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Comments;
