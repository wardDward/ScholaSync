import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Google from '../../../assets/google.png';
import Logo from '../../../assets/logo.png';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  });

  const user = {
    email: 'edward.taligatos03@gmail.com',
    password: 'password',
  };

  const handleLogin = () => {
    if (email === '' && password === '') {
      setErrorMessage(prevState => ({
        ...prevState,
        email: 'Email is required.',
        password: 'Password is required.',
      }));
    } else if (email === '') {
      setErrorMessage(prevState => ({
        ...prevState,
        email: 'Email is required.',
        password: '',
      }));
    } else if (password === '') {
      setErrorMessage(prevState => ({
        ...prevState,
        email: '',
        password: 'Password is required.',
      }));
    } else {
      if (email === user.email && password === user.password) {
        navigation.navigate('Main');
      } else {
        setErrorMessage(prevState => ({
          ...prevState,
          email: 'Invalid credentials.',
        }));
      }
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', paddingVertical: 20}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Logo} style={{height: 100, width: 100}} />
          </View>
          <View style={{marginTop: 40, alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
              Welcome
            </Text>
            <Text
              style={{
                marginTop: 2,
                color: 'gray',
                fontSize: 14,
                textAlign: 'center',
                maxWidth: 250,
              }}>
              In ScholaSync, Where learning unites, collaboration thrives
            </Text>
          </View>
        </View>
        {/* forms */}
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 20,
            marginTop: 55,
          }}>
          <View>
            <Text style={{color: 'gray', marginBottom: 3}}>Email Address</Text>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder="Enter your email"
              style={{
                borderColor: 'gray',
                paddingVertical: 5,
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 8,
              }}
            />
            {errorMessage.email && (
              <Text style={{color: 'red'}}>{errorMessage.email}</Text>
            )}
          </View>
          <View style={{marginVertical: 12}}>
            <Text style={{color: 'gray', marginBottom: 3}}>Password</Text>
            <TextInput
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your email"
              style={{
                borderColor: 'gray',
                paddingVertical: 5,
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 8,
              }}
            />
            {errorMessage.password && (
              <Text style={{color: 'red'}}>{errorMessage.password}</Text>
            )}
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: 'orange'}}>Forgot Password?</Text>
          </View>
          <View style={{marginTop: 22}}>
            <TouchableOpacity
              onPress={() => handleLogin()}
              style={{backgroundColor: 'blue', padding: 12, borderRadius: 12}}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* google */}
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
          }}>
          <View style={{borderColor: 'gray', borderWidth: 1, flex: 1}} />
          <Text style={{marginHorizontal: 15}}>Sign in with</Text>
          <View style={{borderColor: 'gray', borderWidth: 1, flex: 1}} />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 6,
            }}>
            <Image source={Google} style={{height: 25, width: 25}} />
            <Text style={{marginLeft: 5}}>Sign in using google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
