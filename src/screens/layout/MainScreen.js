import {View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import HomeScreen from '../HomeScreen';
import MesssageScreen from '../MesssageScreen';
import StudyGroup from '../StudyGroup';


const MainScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Home');
  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen navigation={navigation}/>;
      case 'Message':
        return <MesssageScreen navigation={navigation}/>;
      case 'StudyGroup':
        return <StudyGroup navigation={navigation}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'punk',
            padding: 12,
            flexDirection: 'column',
          }}>
   
          {renderScreen()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default MainScreen;
