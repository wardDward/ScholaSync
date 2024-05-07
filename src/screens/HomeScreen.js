import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../components/posts/PostCard';
import Icon from 'react-native-vector-icons/Feather';
import { posts } from '../data/posts';
import { tags } from '../data/tags';

const Tabs = ({ onPress }) => {
  const tagsAvail = tags;
  return (
    <>
      {tagsAvail.map(item => (
        <TouchableOpacity
          key={item.id}
          style={{
            borderWidth: 1,
            borderColor: 'orange',
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: 50,
            borderBottomWidth: 2,
            borderBottomColor: 'orange',
          }}
          onPress={() => onPress(item.name)}>
          <Text style={{ color: 'orange', fontWeight: 'bold' }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const HomeScreen = ({ navigation }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const data = selectedTag ? posts.filter(post => post.tags.includes(selectedTag)) : posts;

  function getFormattedDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  }

  const currentDate = new Date();
  const formattedDate = getFormattedDate(currentDate);

  const handleTagPress = (tagName) => {
    setSelectedTag(tagName);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {formattedDate}
        </Text>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: 5,
              gap: 10,
              marginTop: 18,
              height: 30,
            }}>
            <Tabs onPress={handleTagPress} />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            padding: 12,
            flexDirection: 'column',
          }}>
          <FlatList
            style={{
              flex: 1,
              marginHorizontal: 5,
              marginTop: 20,
            }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <PostCard item={item} navigation={navigation} />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreatePost')}
          style={{
            position: 'absolute',
            top: '85%',
            right: '5%',
            backgroundColor: '#fff',
            elevation: 8,
            borderRadius: 50,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="plus" size={30} color="blue" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
