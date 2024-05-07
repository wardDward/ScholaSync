import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/auth/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PostScreen from "./src/screens/PostScreen";
import CreatePost from "./src/screens/CreatePost";
import MesssageScreen from "./src/screens/MesssageScreen";
import MainScreen from "./src/screens/layout/MainScreen";
import GroupScreen from "./src/screens/GroupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen}/>
        <Stack.Screen name="Message" component={MesssageScreen}/>
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Group" component={GroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
