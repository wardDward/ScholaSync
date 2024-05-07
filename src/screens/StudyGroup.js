import {
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {groupForums} from '../data/groups';
import Icon from 'react-native-vector-icons/FontAwesome';

const GroupCard = ({item,navigation}) => {
  const {height, width} = useWindowDimensions();
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Group', {navigation, item})}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 5,
        backgroundColor: 'white',
        height: height / 4,
        width: (width / 5) * 2,
        marginHorizontal: 6,
        borderRadius: 5,
        overflow: 'hidden',
        elavation: 15,
      }}>
      <ImageBackground
        source={{uri: item.image_uri}}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          objectFit: 'cover',
          flex: 1,
        }}>
        <Text
          style={{
            color: '#e8eded',
            fontSize: 15,
            fontWeight: 'bold',
            maxWidth: 100,
            padding: 5,
          }}>
          {item.topic}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default function StudyGroup({navigation}) {
  const groups = groupForums;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          zIndex: 99999,
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
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={groups}
          renderItem={({item}) => (
            <GroupCard item={item} navigation={navigation} />
          )}
          contentContainerStyle={{}}
          key={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
