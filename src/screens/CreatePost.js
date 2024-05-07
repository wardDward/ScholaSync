import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Modal,
  Pressable,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {tags} from '../data/tags';

const handleHead1 = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>;
const handleHead2 = ({tintColor}) => <Text style={{color: tintColor}}>H2</Text>;
const handleHead3 = ({tintColor}) => <Text style={{color: tintColor}}>H3</Text>;
const handleHead4 = ({tintColor}) => <Text style={{color: tintColor}}>H4</Text>;
const handleHead5 = ({tintColor}) => <Text style={{color: tintColor}}>H5</Text>;
const handleHead6 = ({tintColor}) => <Text style={{color: tintColor}}>H6</Text>;

const TagCard = ({tag}) => {
  const {height, width} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingVertical: 12,
        width: (width / 3) * 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}>
      <Text style={{color: '#000'}}>{tag.name}</Text>
    </TouchableOpacity>
  );
};

const RelatedTagCard = ({tag}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 3,
        borderRadius: 12,
      }}>
      <Text style={{color: '#000'}}>{tag.name}</Text>
      <Pressable>
        <Icon name="close" onPress={() => console.log('red')} />
      </Pressable>
    </View>
  );
};

const TagModal = ({modalVisible, setModalVisible, tags}) => {
  const {height, width} = useWindowDimensions();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: height / 2,
            width: width * 0.9,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={25} color="red" />
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 5,
                color: '#000',
              }}>
              Choose tag for your Question
            </Text>
          </View>
          <TextInput
            style={{borderBottomWidth: 1, paddingVertical: 2, marginBottom: 10}}
            placeholder="Search Tag..."
          />
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            numColumns={2}
            data={tags}
            renderItem={({item}) => <TagCard tag={item} />}
          />
        </View>
      </View>
    </Modal>
  );
};

const RelatedTagModal = ({relatedModalVisible, setRelatedModalVisible}) => {
  const {height, width} = useWindowDimensions();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={relatedModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setRelatedModalVisible(!relatedModalVisible);
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: height / 2,
            width: width * 0.9,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Pressable
                onPress={() => setRelatedModalVisible(!relatedModalVisible)}>
                <Icon name="close" size={25} color="red" />
              </Pressable>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 5,
                color: '#000',
              }}>
              Your Choosen Tag
            </Text>
          </View>
          <FlatList
            data={tags}
            renderItem={({item}) => <RelatedTagCard tag={item} />}
          />
        </View>
      </View>
    </Modal>
  );
};

const CreatePost = ({navigation}) => {
  const richTextRef = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const goBack = () => {
    if (content !== '' || title !== '') {
      Alert.alert('You have a draft', 'Are you sure you want to go back?', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => navigation.goBack()},
      ]);
    } else {
      navigation.goBack();
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [relatedModalVisible, setRelatedModalVisible] = useState(false);
  const data = tags;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          paddingHorizontal: 25,
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => goBack()}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setModalVisible(true)}>
          <Icon name="tags" color="#000" />
          <Text style={{color: '#000', marginLeft: 4}}>Add tags</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Questions are the compasses that guide us through the uncharted
        territories of knowledge
      </Text>
      <RichToolbar
        style={{borderBottomWidth: 2, marginTop: 20, backgroundColor: 'white'}}
        getEditor={() => richTextRef.current}
        actions={[
          actions.keyboard,
          actions.setBold,
          actions.setItalic,
          actions.heading1,
          actions.heading2,
          actions.heading3,
          actions.heading4,
          actions.heading5,
          actions.heading6,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.setStrikethrough,
          actions.checkboxList,
          actions.undo,
          actions.redo,
        ]}
        iconMap={{
          [actions.heading1]: handleHead1,
          [actions.heading2]: handleHead2,
          [actions.heading2]: handleHead2,
          [actions.heading3]: handleHead3,
          [actions.heading4]: handleHead4,
          [actions.heading5]: handleHead5,
          [actions.heading6]: handleHead6,
        }}
      />
      <View style={{padding: 12}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setRelatedModalVisible(true)}>
          <Icon name="tag" color="#000" />
          <Text style={{color: '#000', marginLeft: 4}}>Related Tags</Text>
        </TouchableOpacity>
        <TextInput
          onChange={e => setTitle(e.target.value)}
          placeholder="Content Title..."
          style={{
            borderColor: 'lightgray',
            borderBottomWidth: 2,
            fontSize: 20,
            marginBottom: 15,
          }}
        />
        <ScrollView
          style={{height: '50%', backgroundColor: 'red'}}
          contentContainerStyle={{flexGrow: 1}}>
          <RichEditor
            style={{borderWidth: 2, borderColor: 'lightgray', flex: 1}}
            ref={richTextRef}
            placeholder="Content goes here..."
            onChange={descriptionText => {
              setContent(descriptionText);
            }}
            initialContentHTML={content}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 8,
              backgroundColor: 'red',
              marginTop: 20,
              borderRadius: 12,
              width: 150,
            }}
              onPress={() => navigation.goBack()}
            >
              
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 8,
              backgroundColor: '#2196F3',
              marginTop: 20,
              borderRadius: 12,
              width: 150,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Publish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TagModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tags={data}
      />
      <RelatedTagModal
        relatedModalVisible={relatedModalVisible}
        setRelatedModalVisible={setRelatedModalVisible}
        tags={data}
      />
    </SafeAreaView>
  );
};

export default CreatePost;
