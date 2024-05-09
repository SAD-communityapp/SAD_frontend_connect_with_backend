import React, { useState,Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import Button from "../../components/Button";
import colors from '../../assets/colors/colors';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';

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

const SigninScreen = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSignIn = () =>{
        navigation.navigate("MainApp")
    }

    return(
        <LinearGradient
            colors={['#BED7DC', '#D6E2D7', '#FCF3D0']}
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        >
            <View style={{
                ...H3,
                flexDirection: 'column',
                alignItems: 'center',
                gap: 100,
                marginTop: 205,
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image source={require("./image/image38.png")}
                    style={{
                        height: 112,
                        width: 112,
                        top: 10,
                        marginBottom: 32,
                    }}
                    />
                </View>
                <View style={{
                    width: 204,
                    flexDirection: 'column',
                    gap: 32,
                    justifyContent: "center",
                    
                }}>
                    <View style={{
                        width: 204,
                        flexDirection: 'column',
                        gap: 16,
                        justifyContent: "center",
                    }}>
                        <TextInput
                        placeholder="請輸入帳號"
                        value={username}
                        onChangeText={handleUsernameChange}
                        style={{
                            borderColor: colors.tertiary_75,
                            borderRadius : 10,
                            backgroundColor: colors.text_white,
                            paddingVertical: 4,
                            paddingHorizontal: 12,
                            borderraidius: 10
                        }}
                        >
                        </TextInput>

                        <TextInput
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={true}
                        placeholder="請輸入密碼"
                        style={{
                            borderColor: colors.tertiary_75,
                            borderRadius : 10,
                            backgroundColor: colors.text_white,
                            paddingVertical: 4,
                            paddingHorizontal: 12,
                            borderraidius: 10
                        }}
                        >
                        </TextInput>
                    </View>
                    <Button
                        title = "登入"
                        filled={true} 
                        style= {{
                            height: 40,
                            width: 112,
                            marginTop: 24,
                            width: 204,
                        }}
                        onPress={handleSignIn}
                        disabled={!username || !password}
                        
                    >
                    </Button>
                </View>
            </View>
        </LinearGradient>
        
        
    )
}
export default SigninScreen