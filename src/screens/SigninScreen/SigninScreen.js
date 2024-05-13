import React, { useState,Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import Button from "../../components/Button";
import colors from '../../assets/colors/colors';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
// import login from "@/lib/login";
// import Link from "next/link";
import { useRouter } from "next/navigation";

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
        setUsername("");
        setPassword("");
        
    }
//前後端串起來的 handleSignIn
    // async function handleSignIn() {
    //     // Perform login logic
    //     try {
    //       const user = await login({
    //         email: email,
    //         password: password,
    //       });
    //       const tkn = user.authToken;
    //       const id = user.user.id;
    //       //console.log(user);
    //       console.log(tkn);
    //       console.log(id);
    //       localStorage.setItem("token", tkn);
    //       localStorage.setItem("userID", id);
    //       // Redirect to /task after successful login
    //       router.push("/task");
    //     } catch (err) {
    //       setErr(true);
    //     }
    //   }

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
                        placeholderTextColor={colors.tertiary_100}
                        value={username}
                        onChangeText={handleUsernameChange}
                        style={styles.inputContainer}
                        >
                        </TextInput>

                        <TextInput
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={true}
                        placeholder="請輸入密碼"
                        placeholderTextColor={colors.tertiary_100}
                        style={styles.inputContainer}
                        >
                        </TextInput>
                    </View>
                    <Button
                        title = "登入"
                        primary_filled={true} 
                        // style= {{
                        //     height: 40,
                        //     width: 112,
                        //     marginTop: 24,
                        //     width: 204,
                            
                        // }}
                        onPress={handleSignIn}
                        disabled={!username || !password}
                    >
                    </Button>
                </View>
            </View>
        </LinearGradient>
        
        
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

export default SigninScreen


// export default async function login(data: UserLogin) {
//     // const data : UserLogin = {
//     //     "email": "talk2wisdommatt@gmail.com",
//     //     "password": "password",
//     // }
//     const res = await fetch('https://todo.fredred.tw/users/login', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     if (!res.ok) {
//       throw new Error('Failed to register')
//     }
   
//     return res.json()
// }

// "use client";
// import login from "@/lib/login";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const LoginPage: React.FC = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [err, setErr] = useState(false);

//   async function handleLogin() {
//     // Perform login logic
//     try {
//       const user = await login({
//         email: email,
//         password: password,
//       });
//       const tkn = user.authToken;
//       const id = user.user.id;
//       //console.log(user);
//       console.log(tkn);
//       console.log(id);
//       localStorage.setItem("token", tkn);
//       localStorage.setItem("userID", id);
//       // Redirect to /task after successful login
//       router.push("/task");
//     } catch (err) {
//       setErr(true);
//     }
//   }

//   return (
//     <div className="content-center">
//       <h2>Login Page</h2>
//       <form
//         onSubmit={(e) => {
//           // e.preventDefault();
//         }}
//       >
//         <input
//           type="email"
//           className="text-slate-950 rounded mr-2"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <br></br>

//         <input
//           type="password"
//           className="text-slate-950 rounded mr-2 mt-2"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <br></br>
//         <button
//           type="submit"
//           onClick={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}
//           className="rounded border-2 bg-slate-50 text-slate-500 mt-2"
//         >
//           Login
//         </button>
//       </form>

//       <p>
//         Don't have an account?{" "}
//         <Link legacyBehavior href="/auth/register">
//           <a className="underline">Register</a>
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;
