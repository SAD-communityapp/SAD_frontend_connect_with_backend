import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'
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
const Reservation = ({ route }) => {

    const navigation = useNavigation();
    const handlePoolBall = () => {

    }
    const handleMeeting = () => {
      navigation.navigate("MeetingRoom", { activeTab: activeTab });
    }
    const handleBack = () => {
      // Handle navigation to the announcement details screen
      //console.log("Navigating to announcement:", announcement.title);
        navigation.goBack()

        };
        const [activeTab, setActiveTab] = useState('active');
        useEffect(() => {
          if (route.params === 'records') {
              setActiveTab(route.params);
          }
      }, [route.params]);

        const handleTabChange = (tab) => {
            setActiveTab(tab);
        };
        return (
          <View style={{backgroundColor: colors.background_white, height: '100%'}}>
              <Header title = "公設預約"/>
              <TabBar activeTitle="我要預約" recordTitle = "預約紀錄" activeTab={activeTab} handleTabChange={handleTabChange}></TabBar>
                <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
                    {/* 根据选项卡状态渲染不同的内容 */}
                    {activeTab === 'active' ? (
                      <View style={{gap: 16}}>
                        <View style={styles.reserveContainer}>
                          <View style={{flexDirection: 'row', gap: 16, alignItems: 'center',}}>
                              <Image source={require("../../../assets/img/撞球.png")} style={styles.image}></Image>
                              <View style={styles.reserveTextContainer}>
                                <Text style={{...Title, fontWeight: 'bold'}}>撞球桌</Text>
                                <Text style={{...Title}}>每天 08:00 ~ 24:00</Text>
                              </View>
                          </View>

                          <Button
                            title = "馬上預約"
                            primary_filled={true} 
                            onPress={handlePoolBall}
                          >
                        </Button>
                        </View>
                        <View style={styles.reserveContainer}>
                            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center',}}>
                                <Image source={require("../../../assets/img/健身.png")} style={styles.image}></Image>
                                <View style={styles.reserveTextContainer}>
                                  <Text style={{...Title, fontWeight: 'bold'}}>健身房</Text>
                                  <Text style={{...Title}}>每天 08:00 ~ 24:00</Text>
                                </View>
                            </View>
                            <Button
                                title = "馬上預約"
                                primary_filled={true} 
                                onPress={handlePoolBall}
                              >
                            </Button>
                        </View>
                        <View style={styles.reserveContainer}>
                            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center',}}>
                                <Image source={require("../../../assets/img/Pool.png")} style={styles.image}></Image>
                                <View style={styles.reserveTextContainer}>
                                  <Text style={{...Title, fontWeight: 'bold'}}>游泳池</Text>
                                  <Text style={{...Title}}>每天 08:00 ~ 22:00</Text>
                                </View>
                            </View>
                            <Button
                                title = "馬上預約"
                                primary_filled={true} 
                                onPress={handlePoolBall}
                              >
                            </Button>
                        </View>
                        <View style={styles.reserveContainer}>
                            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center',}}>
                                <FontAwesome6 name="people-line" size={40} color={colors.text_black}/>
                                <View style={styles.reserveTextContainer}>
                                  <Text style={{...Title, fontWeight: 'bold'}}>會議室</Text>
                                  <Text style={{...Title}}>每天 08:00 ~ 21:00</Text>
                                </View>
                            </View>
                            <Button
                                title = "馬上預約"
                                primary_filled={true} 
                                onPress={handleMeeting}
                              >
                            </Button>
                        </View>
                        
                        
                      </View>
                    ) : (
                        <View>
                            <Text>这里放置預約紀錄的内容</Text>
                        </View>
                    )}
                </ScrollView>
          </View>
      )
}

const styles = StyleSheet.create({
    headerBackground:{
        flexDirection: 'row',
        paddingHorizontal: 16,
        flex: 1,
        paddingTop: 48,
        paddingBottom: 16,
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        gap: 8,
        alignItems: 'center',
    },
    headerContainer:{
        flexDirection: 'row',
        flex: 1,
        gap: 8,
        alignItems: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
        marginHorizontal: 20,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    tabText: {
        fontSize: 16,
        color: colors.tertiary_50,
    },
    activeTabItem: {
        borderBottomWidth: 4,
        borderBottomColor: colors.primary_100,
    },
    activeTabText: {
        fontWeight: 'bold',
        color: colors.primary_100,
    },
    reserveTextContainer:{
      marginVertical: 8,
      gap: 8,
    },
    reserveContainer:{
      alignItems: 'center',
      gap: 16,
      flexDirection: 'row',
      backgroundColor: colors.text_white,
      borderRadius: 10,
      paddingVertical: 8,

      justifyContent: 'space-around',
    },
    image:{

    }

});

export default Reservation;