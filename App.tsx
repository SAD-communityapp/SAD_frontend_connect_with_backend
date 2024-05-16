/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import colors from './src/assets/colors/colors.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SigninScreen from './src/screens/SigninScreen/SigninScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

import Home from './src/screens/Home/Home.js';
import Services from './src/screens/Services/Services.js';
import Notification from './src/screens/Notification/Notification.js';
import My from './src/screens/My/My.js';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import AnnouncementDetail from './src/screens/Home/AnnouncementDetail.js'
import icoMoonConfig from './src/assets/icons/selection.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reservation from './src/screens/Services/Reservation/Reservation.js';
import MeetingRoom from './src/screens/Services/Reservation/MeetingRoom.js';
import ManagementFee from './src/screens/Services/ManagementFee/ManagementFee.js';
import PaymentDetail from './src/screens/Services/ManagementFee/PaymentDetail.js';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const HomeName = '主頁';
const ServicesName = '服務';
const NotificationName = '通知';
const MyName = '個人';


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


function HomeStackNavigator(){
  return(
    <Stack.Navigator
        initialRouteName = 'Home'
        screenOptions={{
          header: (props) => <NavBar/>,
        }}
      >
        <Stack.Screen
          name = "Home"
          component = {Home}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="AnnouncementDetail" component={AnnouncementDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

function ServicesStackNavigator(){
  return(
    <Stack.Navigator
        initialRouteName = 'Services'
        screenOptions={{
          header: (props) => <NavBar/>,
        }}
      >
        <Stack.Screen
          name = "Services"
          component = {Services}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false }}/>
        <Stack.Screen name="MeetingRoom" component={MeetingRoom} options={{headerShown: false}}/>
        <Stack.Screen name="ManagementFee" component={ManagementFee} options={{headerShown: false}}/>
        <Stack.Screen name="PaymentDetail" component={PaymentDetail} options={{headerShown: false}}/>

      </Stack.Navigator>
  )
}

function SigninSignoutStackNavigator(){
  return(
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
        
      </Stack.Navigator>
  )
}

const App = () => {
  return (
    
    <NavigationContainer>
      <SigninSignoutStackNavigator/>
    </NavigationContainer>
  );
}

function NavBar(){
  return (
    
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
              <Tab.Screen name={HomeName} component={HomeStackNavigator} />
              <Tab.Screen name={ServicesName} component={ServicesStackNavigator} />
              <Tab.Screen name={NotificationName} component={Notification} />
              <Tab.Screen name={MyName} component={My} />
    </Tab.Navigator>
  );
}

const MainApp = () => {
  return (
    <NavBar/>
  );
};


export default App;