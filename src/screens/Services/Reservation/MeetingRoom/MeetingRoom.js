import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, { useState  } from 'react'
import colors from '../../../../assets/colors/colors'
import { Body_Regular, H3, Small_Body_Regular, Title } from '../../../../assets/TextStyles'
import Header from '../../../../components/Header'
import Button from '../../../../components/Button'



const Calendar = () => {
  // 獲取本週第一天
  const currentDate = new Date();
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate());
  // 生成本週日期
  const weekDates = [];
  const weekDay = [];
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDatePress = (date) => {
      setSelectedDate(selectedDate => selectedDate && selectedDate.getTime() === date.getTime() ? null : date);
  };
  for (let i = 0; i < 7; i++) {
    const day = new Date(firstDayOfWeek);
    day.setDate(firstDayOfWeek.getDate() + i);
    weekDates.push(day);
    weekDay.push(day.getDay()); 
  }

  return (
    <View>
        <View style={styles.weekContainer}>
            {weekDates.map((date, index) => (
                <View key={index} style={styles.dateWrapper}>
                    <Text style={styles.weekDayText}>{['週日', '週一', '週二', '週三', '週四', '週五', '週六'][weekDay[index % 7]]}</Text>
                    <TouchableOpacity 
                        onPress={() => handleDatePress(date)}
                        style={[
                        styles.dateButton,
                        selectedDate && selectedDate.getDate() === date.getDate() ? styles.selectedDateButton : styles.unSelectedDateButton
                        ]}
                        activeOpacity={1}
                    >
                        <Text style={[
                        styles.dateText,
                        selectedDate && selectedDate.getDate() === date.getDate() ? styles.selectedDate : styles.unselectedDate
                        ]}>{date.toLocaleDateString(undefined, { month: '2-digit', day: 'numeric' })}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
        <View style={{flexDirection: 'row', gap: 16, justifyContent: 'flex-end', marginVertical: 16}}>
            <View style={{ width: 20, height: 20, backgroundColor: colors.text_white, borderRadius: 5 }}></View>
            <Text style={{...Small_Body_Regular}}>可選</Text>
            <View style={{ width: 20, height: 20, backgroundColor: colors.primary_100, borderRadius: 5 }}></View>
            <Text style={{...Small_Body_Regular}}>已選</Text>
        </View>
        {selectedDate && <TimeSlot selectedDate={selectedDate} />}
    </View>


  );
};


const TimeSlot = ({ selectedDate }) => {
    // 假設這是從服務器獲取的可預約時段資料
    const timeSlots = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const rows = [];
    const itemsPerRow = 4;
    const [selectedTime, setSelectedTime] = useState(null);
    for (let i = 0; i < timeSlots.length; i += itemsPerRow) {
        rows.push(timeSlots.slice(i, i + itemsPerRow));
    }

    const handleTimePress = (slot) => {
        const time = new Date(selectedDate);
        const [hour, minute] = slot.split(':');
        time.setHours(parseInt(hour), parseInt(minute), 0, 0);
        setSelectedTime(time);
    };

    return (
        <View>
            <View style={{gap: 16, marginBottom: 16}}>
                {rows.map((row, index) => (
                    <View key={index} style={styles.rowContainer}>
                        {row.map((slot, idx) => (
                            <TouchableOpacity
                                activeOpacity={1}
                                key={idx}
                                style={[
                                    styles.timeSlotButton,
                                    selectedTime === slot && styles.selectedTimeButton,
                                    selectedTime && selectedTime.getTime() === new Date(selectedDate).getTime() ? styles.selectedTimeButton : styles.unSelectedTimeButton 
                                ]}
                                onPress={() => handleTimePress(slot)}
                            >
                                <Text style={[
                                    selectedTime && selectedTime.getTime() === new Date(selectedDate).getTime() ? styles.selectedTime : styles.unSelectedTime
                                ]}>{slot}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.separator}></View>
            <Text style = {styles.titleText}>已選時段</Text>
        </View>
        

    );
    
};


const MeetingRoomReservation = () => {
      
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
                <Text style = {styles.titleText}>時段選擇</Text>
                <Calendar/>
                
            </ScrollView>
                    
        </View>
    )
}

const MeetingRoom  = () => {
    const [showReservation, setShowReservation] = useState(false);
    const handleReservation = () => {
        setShowReservation(true);
    }
    
    return (
        <View style={{backgroundColor: colors.background_white, height: '100%'}}>
            {!showReservation ? (
                
                <View>
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
                    <View style={{maxWidth : 250, alignSelf: 'center', marginTop: 56}}>
                        <Button primary_filled={true} 
                                    onPress={handleReservation}
                                    title={"立即預約"}/> 
                    </View>      
                </View>
                ) : (
                    <MeetingRoomReservation/>
                )}
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
        marginVertical: 16,
    }, 
    contentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    contentText:{
        ...Body_Regular,
        marginBottom: 16,
    },
    separator: {
        borderBottomColor: colors.text_black, 
        borderBottomWidth: 1, 
    },
    weekContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    unSelectedDateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary_100,
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: colors.tertiary_25,
    },
    selectedDateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary_100,
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: colors.primary_100,
    },
    unselectedDate:{
        ...Small_Body_Regular,
        color: colors.text_black,
    },
    selectedDate: {
        ...Small_Body_Regular,
        color: colors.text_white,
    },
    dateWrapper: {
        gap: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledTimeButton:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 58,
        height: 32,
        backgroundColor: colors.tertiary_25,
    },
    unSelectedTimeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 58,
        height: 32,
        backgroundColor: colors.text_white,
    },
    selectedTimeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 58,
        height: 32,
        backgroundColor: colors.primary_100,
    },
    unSelectedTime:{
        ...Small_Body_Regular,
        color: colors.primary_100,
    },
    selectedTime: {
        ...Small_Body_Regular,
        color: colors.text_white,
    },
    
    disabledTime: {
        ...Small_Body_Regular,
        color: colors.tertiary_50,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default MeetingRoom;