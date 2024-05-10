import React from "react";
import {View, Text, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import colors from "../../assets/colors/colors";

const Notification = ({navigation}) =>{
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
                <Text>
                    通知頁面
                </Text>
            </ScrollView> 
        </View>
        
    )
}
export default Notification