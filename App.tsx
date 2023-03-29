
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from  '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// all screen are import here
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';




const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

/* const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
}; */

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Bit Software Solution Ltd' }}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        />
        <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        />
        
      </Stack.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="DetailScreen" component={DetailsScreen} />
        <Tab.Screen name= "ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  homeScreen: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
