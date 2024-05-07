import {View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { chats } from '../data/chats';


const ChatList = ({item}) => {
  return (
          <TouchableOpacity style={{flexDirection: 'row', alignItems:  'center', marginVertical: 5,backgroundColor: 'white', elevation: 5, paddingVertical: 9, borderRadius: 12, paddingHorizontal: 10}}>
          <Image source={{uri: item.image_uri}} style={{height: 50, width: 50, borderRadius: 50}}/>
          <View style={{marginLeft: 9,  width: '70%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000'}}>{item.name}</Text>
          <Text style={{fontSize: 15, color: '#000'}} numberOfLines={1}>{item.message}</Text>
          </View>
          <View style={{backgroundColor: 'red', marginLeft: 5, height: 
          25, width: 25, borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>{item.notif}</Text>
          </View>
      </TouchableOpacity>
  )
}
const MesssageScreen = () => {
  const chatHead = chats
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="search" style={{position: 'absolute', left: 10}} />
        <TextInput
          placeholder="Search"
          style={{
            fontSize: 15,
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 15,
            paddingVertical: 6,
            paddingLeft: 28,
            flex: 1,
          }}
        />
      </View>
      <FlatList contentContainerStyle={{padding: 10}} data={chatHead} renderItem={(({item}) => <ChatList item={item}/>)} keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
};

export default MesssageScreen;
