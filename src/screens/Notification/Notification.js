import React from "react";
import {View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';


const Notification = ({navigation}) =>{
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{H3}}
            >
                Notification Screen.
            </Text>
        </View>
        
    )
}
export default Notification