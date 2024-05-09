// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createIconSetFromFontello } from 'react-native-vector-icons'
// import fontelloConfig from '../../assets/fonts/config.json'

// import colors from '../../assets/colors/colors.js';
// import { getHeaderTitle } from '@react-navigation/elements';
// import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from './assets/TextStyles';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Octicons from 'react-native-vector-icons/Octicons';

// import Home from '../screens/Home/index.js';
// import Services from '../screens/Services/Services.js';
// import Notification from '../screens/Notification/Notification.js';
// import My from '../screens/My/My.js';
// const CustomIcon = createIconSetFromFontello(fontelloConfig)
// const HomeName = 'Home';
// const ServicesName = 'Services';
// const NotificationName = 'Notification';
// const MyName = 'My';

// const Tab = createBottomTabNavigator();


// //<CustomIcon name="user" size={size} {...} />
// export default function NavBar() {
//     return (
//         <Tab.Navigator
//             initialRouteName={HomeName}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;
//                     let rn = route.name;

//                     if (rn == HomeName) {
//                         return focused ? <Ionicons name={'home'} size={size} color={colors.primary_100} /> : <Ionicons name={'home-outline'} size={size} color={colors.text_black} />
//                     } else if (rn == ServicesName) {
//                         return focused ? <CustomIcon name="services" size={size} color={colors.primary_100} /> : <CustomIcon name={'services_outlined'} size={size} color={colors.text_black} />
//                     } else if (rn == NotificationName) {
//                         return focused ? <Octicons name="bell-fill" size={size} color={colors.primary_100} /> : <Octicons name={'bell'} size={size} color={colors.text_black} />
//                     } else {
//                         return focused ? <Octicons name="person-fill" size={size} color={colors.primary_100} /> : <Octicons name={'person'} size={size} color={colors.text_black} />
//                     }
//                 },
//             })}
//         >
//             <Tab.Screen name={HomeName} component={Home} />
//             <Tab.Screen name={ServicesName} component={Services} />
//             <Tab.Screen name={NotificationName} component={Notification} />
//             <Tab.Screen name={MyName} component={My} />
//         </Tab.Navigator>
//     )
// }
