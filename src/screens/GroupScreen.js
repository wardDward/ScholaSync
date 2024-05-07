import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostCard = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: 'white',
        elevation: 5,
        paddingVertical: 9,
        borderRadius: 12,
        paddingHorizontal: 10,
      }}>
      <View style={{marginLeft: 9}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 15, color: '#000', marginVertical: 7}} numberOfLines={3}>
          {item.content}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 6}}>
            <Icon name="thumbs-up" color="#000" size={16}/>
          <Text style={{fontSize: 15, marginLeft: 5, color:"#000"}}>{item.likes}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default function GroupScreen({navigation, route}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{paddingLeft: 20, marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            fontWeight: 'bold',
            maxWidth: 250,
            textAlign: 'center',
          }}>
          Welcome to {item.topic} Group
        </Text>
      </View>
      <View style={{backgroundColor: 'gray', height: 1, marginTop: 5}} />
      <Text
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          color: '#000',
          fontSize: 18,
        }}>
        Posts & Annoucements
      </Text>
      <FlatList
        data={item.posts}
        renderItem={({item}) => <PostCard item={item} />}
        contentContainerStyle={{marginVertical: 5, paddingHorizontal: 20}}
      />
    </SafeAreaView>
  );
}
