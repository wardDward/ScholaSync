import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import Comments from '../components/posts/Comments';

const PostScreen = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const [disabledButton, setDisabledButton] = useState(true);
  const [comment, setComment] = useState('');
  useEffect(() => {
    if (comment === '') {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [comment]);

  const tagsStyles = {
    p: {
      fontSize: 16,
      lineHeight: 22,
      color: '#222', // Example color
      marginBottom: 8,
    },
    h1: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000', // Example color
      marginBottom: 10,
    },
    // Add more styles for other tags as needed
  };

  const {item} = route.params;
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{paddingLeft: 8, marginTop: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 12, paddingVertical: 10}}
          style={{flex: 1}}>
          <View style={{marginBottom: 30}}>
            <RenderHtml
              contentWidth={width}
              source={{html: item.content}}
              tagsStyles={tagsStyles}
            />
            {item.image ? (
              <Image
                source={{uri: item.image}}
                style={{flex: 1, height: 200, resizeMode: 'contain'}}
              />
            ) : (
              ''
            )}
          </View>
          <View
            style={{backgroundColor: '#f2f2f0', borderRadius: 12, height: 5}}
          />
          <View style={{marginTop: 15}}>
            <Text style={{color: '#000', fontSize: 15}}>Comments</Text>
            <View>
              {item.comments.length > 0 ? (
                item.comments.map(item => (
                  <Comments item={item} key={item.id} />
                ))
              ) : (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
                    No Comment
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          backgroundColor: '#51a3f5',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Add a comment"
          style={{
            backgroundColor: '#e1e2e3',
            paddingVertical: 7,
            flex: 1,
            paddingLeft: 6,
            borderRadius: 12,
          }}
          onChangeText={text => setComment(text)}
          value={comment}
        />
        <TouchableOpacity
          style={{
            width: '20%',
            alignItems: 'center',
            paddingVertical: 12,
            marginLeft: 5,
          }}
          onPress={() => console.log('tesasdtas')}
          disabled={disabledButton}>
          <Icon
            name="share"
            size={20}
            color={disabledButton ? 'gray' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PostScreen;
