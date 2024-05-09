/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
//import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from './assets/TextStyles';
import React from 'react';
import colors from './src/assets/colors/colors.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SigninScreen from './src/screens/SigninScreen/index.js';

import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import type {PropsWithChildren} from 'react';
Ionicons.loadFont();
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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/index.js';
import Services from './src/screens/Services/index.js';
import Notification from './src/screens/Notification/index.js';
import My from './src/screens/My/index.js';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from './src/assets/icons/selection.json'
const Stack = createNativeStackNavigator()
const HomeName = '主頁';
const ServicesName = '服務';
const NotificationName = '通知';
const MyName = '個人';

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const styles = StyleSheet.create({
  H3:{
    fontSize: 24,
    fontFamily: 'NotoSansTC_Bold',
    lineHeight: 33
  },
  Title: {
    fontSize: 16,
    fontFamily: 'NotoSansTC_Bold',
    lineHeight: 20
  },
  Body_Bold: {
    fontSize: 14,
    fontFamily: 'NotoSansTC-Bold',
    lineHeight: 20
  },
  Body_Regular: {
    fontSize: 14,
    fontFamily: 'NotoSansTC-Regular',
    lineHeight: 20
  },
  Small_Body_Regular: {
    fontSize: 12,
    fontFamily: 'NotoSansTC-Regular',
    lineHeight: 16
  },
  Small_Body_Bold: {
    fontSize: 12,
    fontFamily: 'NotoSansTC-SemiBold',
    lineHeight: 16
  },
  Smallest_Body_Regular: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'NotoSansTC-SemiBold',
  }
});

const CustomHeader = () => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Your Header Title</Text>
    </LinearGradient>
  );
};

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'SigninScreen'
      >
        <Stack.Screen
          name = "SigninScreen"
          component = {SigninScreen}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="My" component={My} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = () => {
  return (
    <View style={{ flex: 1 }}>
      
      
      <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary_100,
          tabBarInactiveTintColor: colors.text_black,
          tabBarShowLabel: true,
          tabBarStyle: 
          {
              height: 107,
              paddingBottom: 28,
              paddingTop: 24,
              paddingHorizontal: 0, //this brings them further together and produces the desired prensentation.
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.text_white,
          },

          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn == HomeName) {
                  return focused ? <Ionicons name={'home'} size={28} color={colors.primary_100} /> : <Ionicons name={'home-outline'} size={28} color={colors.text_black} />
              } else if (rn == ServicesName) {
                  return focused ? <AntDesign name="appstore1" size={28} color={colors.primary_100} /> : <AntDesign name={'appstore-o'} size={28} color={colors.text_black} />
              } else if (rn == NotificationName) {
                  return focused ? <Octicons name="bell-fill" size={28} color={colors.primary_100} /> : <Octicons name={'bell'} size={28} color={colors.text_black} />
              } else {
                  return focused ? <Octicons name="person-fill" size={28} color={colors.primary_100} /> : <Octicons name={'person'} size={28} color={colors.text_black} />
              }
          },

      })}>
          <Tab.Screen name={HomeName} component={Home} />
          <Tab.Screen name={ServicesName} component={Services} />
          <Tab.Screen name={NotificationName} component={Notification} />
          <Tab.Screen name={MyName} component={My} />
      </Tab.Navigator>

    </View>
  );
};


export default App;