import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const tabConts = ['Home', 'Message', 'StudyGroup'];

const Tabs = ({activeTab, setActiveTab}) => {
  const choosenTab = tab => {
    setActiveTab(tab);
  };

  const {width} = useWindowDimensions();

  return (
    <>
      {tabConts.map((item, index) => (
        <TouchableOpacity
          onPress={() => choosenTab(item)}
          key={index}
          style={{
            backgroundColor: '#fff',
            paddingVertical: 7,
            width: width * 0.3,
            borderBottomWidth: 2,
            borderBottomColor: activeTab === item ? 'orange' : 'transparent',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: activeTab === item ? 'orange' : 'black',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const NavBar = ({activeTab, setActiveTab}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        paddingTop: 10,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{height: 30, width: 30, borderRadius: 50}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}>
          <Icon
            name="search"
            size={14}
            color="gray"
            style={{position: 'absolute', left: 10, zIndex: 2}}
          />
          <TextInput
            placeholder="Search"
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingVertical: 4,
              marginHorizontal: 5,
              paddingLeft: 20,
              flex: 1,
              borderRadius: 20,
            }}
          />
          <Icon
            name="chevron-down"
            size={14}
            color="gray"
            style={{marginLeft: 5, width: '15%'}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
    </View>
  );
};

export default NavBar;
