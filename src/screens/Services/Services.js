import React, {useState}from "react";
import {ScrollView, SafeAreaView, View, Text, Alert, StyleSheet, FlatList,Table, Row, Rows  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import NavBar from '../../components/NavBar';
import colors from '../../assets/colors/colors';
import Button from "../../components/Button";
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';
const Services = ({navigation}) =>{

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

            </ScrollView>            
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    pagination_container: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space evenly between items
        width: 170,
        paddingTop: 20,
        gap: 8
    },
    numberContainer: {
        backgroundColor: colors.text_white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.tertiary_50,
        paddingHorizontal: 12,
        paddingVertical: 4,
        width: 60,
        
    },
    iconButton: {
        // Add styles for the icon button
    },
});
export default Services