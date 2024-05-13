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


const UnPaymentItem = (props) => {
    const navigation = useNavigation()

    const HandlePayment = () => {

        navigation.navigate("Payment")
    }
    
    const { address, deadline, amount, title} = props;
    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={HandlePayment}>
            <View style={styles.textContainer}>
                <Text style={{...Title, fontWeight: 'bold', color: colors.text_black}}>
                    {title}
                </Text>
                <Text style={{...Title, fontWeight: 'bold', color: colors.notification}}>
                    未繳交
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    住址
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {address}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    繳費期限
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {deadline}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    總計費用
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {amount}
                </Text>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 16}}>
                    {/* <Text>
                        前往繳交
                    </Text> */}
                    <Feather name = "arrow-right-circle" size={28} color={colors.primary_100}/>
                    
                </View>

            </View>
            
      </TouchableOpacity>
    );
  };

  const PaymentItem = (props) => {
    const navigation = useNavigation()

    const HandlePayment = () => {

        navigation.navigate("Payment")
    }
    
    const { address, payTime, amount, title, method} = props;
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{...Title, fontWeight: 'bold', color: colors.text_black}}>
                    {title}
                </Text>
                <Text style={{...Title, fontWeight: 'bold', color: colors.primary_100}}>
                    已繳交
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    住址
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {address}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    繳費日期
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {payTime}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    總計費用
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {amount}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    支付方式
                </Text>
                <Text style={{...Body_Regular, color: colors.text_black}}>
                    {method}
                </Text>
            </View>
            
            
      </View>
    );
  };

const ManagementFee = ({ route }) => {

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
              <Header title = "繳管理費"/>
              <TabBar activeTitle="尚未繳交" recordTitle = "繳費明細" activeTab={activeTab} handleTabChange={handleTabChange}></TabBar>
                <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
                    {/* 根据选项卡状态渲染不同的内容 */}
                    {activeTab === 'active' ? (
                      <UnPaymentItem title="113 年 2 月管理費" deadline="2024-02-29 23:59" amount = "1196" address = "114 號 5 樓之 14"/>
                    ) : (
                        <PaymentItem title="113 年 1 月管理費" payTime="2024-01-04 21:59" amount = "1196" address = "114 號 5 樓之 14" method = "超商繳費"/>

                    )}
                </ScrollView>
          </View>
      )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.text_white,
        padding: 16,
        borderRadius: 10,
        flex: 1,
        gap: 16
    },
    textContainer:{
        flexDirection: 'row',
        flex: 1,
        justifyContent : 'space-between',
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

export default ManagementFee;