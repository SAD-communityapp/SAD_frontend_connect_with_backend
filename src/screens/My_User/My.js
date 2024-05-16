import React from "react";
import {View, Text, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import Button from "../../components/Button";
import colors from "../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';


const My = ({navigation}) =>{
    const handleSignOut = () =>{
        navigation.navigate("SigninScreen")
    }
    return(
        <View style={{backgroundColor: colors.background_white, height: '100%'}}>
            <View style={{ height: 97}}>
                <LinearGradient
                colors={['#FCF3D0', '#D6E2D7', '#BED7DC']}
                style={{ flex: 1, height:97, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}
                >
                    <Text style={{ ...H3, fontWeight: 'bold', color: colors.text_white, paddingTop: 49, paddingLeft: 16 }}>
                    社區網路通
                    </Text>
                </LinearGradient>
            </View>
            
            <ScrollView>                
                <Button
                        title = "登出"
                        tertiary_outlined ={true} 
                        style= {{
                            height: 40,
                            width: 112,
                            marginTop: 24,
                            width: 204,
                            
                        }}
                        onPress={handleSignOut}
                        
                    >
                    </Button>
            </ScrollView> 
        </View>
        
    )
}
export default My