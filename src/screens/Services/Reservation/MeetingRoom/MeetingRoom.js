import { Text, View, StyleSheet, ScrollView, Image} from 'react-native'
import React, { useState  } from 'react'
import colors from '../../../../assets/colors/colors'
import { Body_Regular, H3, Title } from '../../../../assets/TextStyles'
import Header from '../../../../components/Header'
import Button from '../../../../components/Button'
const MeetingRoom  = () => {
    // const meetingRoomReservation ={

    // }
    return (
        <View style={{backgroundColor: colors.background_white, height: '100%'}}>
            <Header title = "會議室預約"/>
            <ScrollView style={styles.container}>                
                <Image source={require("../../../../assets/img/meetingRoom.png")} style={styles.image}/>
                <Text style = {styles.titleText}>會議室</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>開放時間</Text>
                    <Text style={styles.contentText}>每天 09:00~21:00</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>預約單位時間</Text>
                    <Text style={styles.contentText}>每 60 分鐘</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>可預約日期</Text>
                    <Text style={styles.contentText}>即日起至一周以內</Text>
                </View>
                <View style={styles.separator}></View>
                <Text style = {styles.titleText}>設施簡介</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>        
                        {"\t\t\t\t\t"}有大中小三種會議室可供選擇，提供專業會議設備，適合面試、小型會議、家教使用。附帶大電視及無線投影設備。
                    </Text>
                </View>
            </ScrollView>   
            <Button primary_filled={true} 
                        // onPress={meetingRoomReservation}
                        title={"立即預約"}/>         
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        borderRadius: 10,
        width: 400,
    },
    container:{
        marginHorizontal: 20,
        marginVertical: 16,
        gap: 16,
        alignSelf: 'center',
    },
    titleText:{
        ...Title,
        fontWeight: 'bold',
        marginTop: 16,
    }, 
    contentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    contentText:{
        ...Body_Regular,
        marginTop: 16,
    },
    separator: {

        borderBottomColor: colors.text_black, // 设置底部边框颜色
        borderBottomWidth: 1, // 设置底部边框宽度
        marginVertical: 16, // 设置垂直方向的边距
    },
})

export default MeetingRoom;