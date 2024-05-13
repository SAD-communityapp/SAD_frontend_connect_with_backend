import React, { useState , useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import colors from '../../../assets/colors/colors';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../../assets/TextStyles';
// import DataTable from "react-data-table-component";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../components/Button';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import TabBar from '../../../components/TabBar';
import Header from '../../../components/Header';

import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    TextInput,
    Pressable,
    KeyboardAvoidingView
  } from 'react-native';

const Payment = ({navigation}) =>{

    return(
        <View  style={{backgroundColor: colors.background_white, height: '100%'}}>
            <Header title = "管理費繳交明細"/>
        
        </View>

        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: colors.tertiary_75,
        borderRadius : 10,
        backgroundColor: colors.text_white,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderraidius: 10
    },
  });

export default Payment