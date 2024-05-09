import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { TouchableOpacity, Pressable } from "react-native";
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../assets/TextStyles';
import AwesomeButton from "react-native-really-awesome-button";
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';



const Button = (props) => {
    const filledBgColor = props.focused ? colors.primary_100 : colors.primary_75;
    const outlinedColor = filledBgColor;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? colors.text_white : colors.primary_50;
    const IconComponent = props.iconLibrary || Feather;

    const getButtonStyle = ({ pressed }) => {
        let backgroundColor;

        if (props.disabled) {
            backgroundColor = colors.tertiary_25; // Disabled state
        } else if (pressed) {
            backgroundColor = props.title ? colors.primary_100 : colors.primary_75; // Pressed state
        } else {
            backgroundColor = props.title ? bgColor: colors.primary_50; // Default state
        }

        // Additional style for button with only icon
        const iconOnlyStyle = !props.title && props.iconOnlyStyle;

        return [styles.button, { backgroundColor }, iconOnlyStyle, props.style];
    };


    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                getButtonStyle({ pressed }),
                props.style,
                !props.title && props.iconOnlyStyle,
            ]}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            {/* Render icon if provided */}
            {props.icon && <IconComponent name={props.icon} style={styles.icon} />}
            {/* Render text if provided */}
            {props.title && <Text style={[styles.buttonText, { color: textColor }]}>{props.title}</Text>}
        </Pressable>
    );
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        ...Small_Body_Bold, // 使用文本样式
    },
    icon: {
        color: colors.text_white
        // Add some spacing between icon and text
    },
})

export default Button

// import "./Button.css";
// import { IconProperty1AddIsChosenFalse } from "../IconProperty1AddIsChosenFalse/IconProperty1AddIsChosenFalse.jsx";
// export const Button = ({
//   text = "true",
//   type = "filled",
//   color = "primary",
//   state = "pressed",
//   icon = "true",
//   className,
//   ...props
// }) => {
//   const variantsClassName =
//     "text-" +
//     text +
//     " type-" +
//     type +
//     " color-" +
//     color +
//     " state-" +
//     state +
//     " icon-" +
//     icon;

//   return (
//     <div className={"button " + className + " " + variantsClassName}>
//       {type === "filled" &&
//         color === "tertiary" &&
//         state === "default" &&
//         icon === "true" &&
//         text === "true" && (
//           <>
//             <div className="frame-427319037">
//               <IconProperty1AddIsChosenFalse
//                 property1="add"
//                 className="icon-instance"
//               ></IconProperty1AddIsChosenFalse>
//               <div className="div">{text} </div>
//             </div>
//           </>
//         )}
//       {text === "false" && (
//         <>
//           <IconProperty1AddIsChosenFalse
//             property1="add"
//             className="icon-instance"
//           ></IconProperty1AddIsChosenFalse>
//         </>
//       )}
//       {(icon === "false" || text === "true-long" || text === "true-short") && (
//         <>
//           <div className="div">{text} </div>
//         </>
//       )}
//     </div>
//   );
// };



// const Button = ({ text, onPress }) => {
//     return (
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.btnContainerStyle}>
//           <Text style={styles.btnTextStyle}> {text} </Text>
//         </View>
//       </TouchableOpacity>
//     )
//   }

//   const styles = StyleSheet.create({
//     btnContainerStyle: {
//         backgroundColor: colors.primary_100,
//         paddingVertical: 8,
//         width: width / 1.3,
//         borderRadius: 5,
//         paddingHorizontal: 16,
//         paddingVertical: 6,
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     btnTextStyle: {
//       color: '#ffffff',
//       fontSize: 16,
//       textTransform: 'uppercase',
//       textAlign: 'center',
//       fontFamily: 'Quicksand-Medium'
//     }
//   })

// const styles = StyleSheet.create({
//     btnContainerStyle: {
//       backgroundColor: '#3F51B5',
//       paddingVertical: 8,
//       width: width / 1.3,
//       borderRadius: 5
//     },
//     btnTextStyle: {
//       color: '#ffffff',
//       fontSize: 16,
//       textTransform: 'uppercase',
//       textAlign: 'center',
//       fontFamily: 'NotoSansTC'
//     }
//   })




// const Button = ({ title, onPress, type = 'filled', status = 'default' }) => {
//   const getButtonStyle = () => {
//     let buttonStyle = {};

//     // 根据不同的 type 和 status 设置按钮样式
//     switch (type) {
//       case 'filled':
//         buttonStyle.backgroundColor = status === 'default' ? Colors.primary_75 : status === 'pressed' ? Colors.primary_100 : 'gray';
//         buttonStyle.borderColor = 'transparent';
//         buttonStyle.borderWidth = 0;
//         break;
//       case 'outlined':
//         buttonStyle.backgroundColor = 'transparent';
//         buttonStyle.borderColor = status === 'default' ? 'blue' : status === 'hover' ? 'lightblue' : 'gray';
//         buttonStyle.borderWidth = 1;
//         break;
//       default:
//         break;
//     }

//     return buttonStyle;
//   };

//   const getButtonTextStyle = () => {
//     let textStyle = {
//       color: status === 'disabled' ? 'gray' : 'white',
//       fontSize: 16,
//       fontWeight: 'bold',
//     };

//     return textStyle;
//   };

//   const handlePress = () => {
//     if (status !== 'disabled' && onPress) {
//       onPress();
//     }
//   };

//   return (
//     <TouchableOpacity
//       style={[styles.button, getButtonStyle()]}
//       onPress={handlePress}
//       disabled={status === 'disabled'}
//     >
//       <Text style={[styles.buttonText, getButtonTextStyle()]}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Button;
