import React from "react";
import {View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import Button from "../../components/Button";

import Feather from 'react-native-vector-icons/Feather';


const My = ({navigation}) =>{
    const handleSignOut = () =>{
        navigation.navigate("SigninScreen")
    }
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{H3}}
            >
                My Screen.
            </Text>
            <Button
                        title = "登出"
                        filled={true} 
                        style= {{
                            height: 40,
                            width: 112,
                            marginTop: 24,
                            width: 204,
                            
                        }}
                        onPress={handleSignOut}
                        
                    >
                    </Button>
                    <Button iconLibrary={Feather} icon="chevron-right" onPress={() => {}} />
        </View>
        
    )
}
export default My