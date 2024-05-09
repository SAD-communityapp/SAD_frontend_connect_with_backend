import React, {useState}from "react";
import {ScrollView, SafeAreaView, View, Text, Alert, StyleSheet, FlatList,Table, Row, Rows  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import AnnouncementTable from "./Announcement";
import colors from '../../assets/colors/colors';
import Button from "../../components/Button";
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';

LocaleConfig.locales['fr'] = {
    monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['日', '一', '二', '三', '四', '五', '六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'fr';

const announcements = [
    { id: 1, title: '公告1', content: '這是公告1的內容' },
    { id: 2, title: '公告2', content: '這是公告2的內容' },
    { id: 3, title: '公告3', content: '這是公告3的內容' },
    // 根据需要添加更多公告
  ];

  const data = [
    { name: "Customer Service", num: '56', dept:'custserv' },
    { name: "Human Resources", num: '21', dept:'hr' },
    { name: "Quality Assurance", num: '13', dept:'qa' },
    { name: "Marketing", num: '30', dept:'mark' },
    { name: "Research and Development", num: '17', dept:'rnd' },
    { name: "Operations", num: '49', dept:'ops' },
    { name: "Sales", num: '37', dept:'sales' },
    { name: "Distribution", num: '26', dept:'dist' },
    { name: "IT", num: '12', dept:'it' },
  ]

const column = [
    { heading: 'Department', value: 'name' },
    { heading: 'No. of Employees', value: 'num' },
    { heading: 'Actions', value: 'dept' },
];

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

function Home({navigation}){
    const [selected, setSelected] = useState('');
    const getMarked = () => {
        let marked = {};
        for(let i = 1; i <= 10; i++) {
          let day = i.toString().padStart(2, '0');
          let periods = [
            {
              startingDay: i == 1,
              endingDay: i == 3,
              color: colors.text_white,
              text: '洗水塔',
              betweenStartAndEnd: i >= 1 && i <= 3

            },
            (i >= 2 && i <= 6) && {
              startingDay: i == 2,
              endingDay: i == 6,
              color: colors.text_white,
              text: '停電',
              betweenStartAndEnd: i >= 2 && i <= 3
            }
          ];
          marked[`2024-05-${day}`] = {
            periods
          };
        }
        return marked;
      };
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
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{...Title, fontWeight: 'bold', color: colors.text_black, paddingTop: 16}}>
                        社區公告
                    </Text>
                </View>
                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                    <AnnouncementTable announcements={announcements} />
                    <View style={styles.pagination_container}>
                        <Button iconLibrary={Feather} icon="chevron-left" onPress={() => {}} />
                        <View style={styles.numberContainer}>                        
                            <Text style={{Title, color: colors.text_black, textAlign: 'left'}}> 1 </Text>
                        </View>
                        <Button iconLibrary={Feather} icon="chevron-right"onPress={() => {}} />
                    </View>
                </View>
                <View style={{paddingHorizontal: 20, paddingBottom: 16}}>
                    <Text style={{...Title, fontWeight: 'bold', color: colors.text_black, paddingVertical: 16}}>
                        社區行事曆
                    </Text>
                    <SafeAreaView>
                        <Calendar
                            initialDate="2024-05-01"
                            markingType="multi-period"
                            markedDates={getMarked()}
                            style={{
                                    borderRadius: 10,
                                    backgroundColor: colors.text_white,
                                    margin: 0
                            }}
                            theme={{
                                'stylesheet.calendar.header': {
                                    header: {
                                    // override the default header style react-native-calendars/src/calendar/header/style.js
                                    backgroundColor: colors.primary_50, // set the backgroundColor for header
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                    width: '100%'
                                    },
                                    monthText: {
                                    color: colors.text_white,
                                    ...Title,
                                    fontWeight: '700',
                                    fontSize: 16,
                                    },
                                    dayHeader: {
                                    marginTop: 2,
                                    ...Smallest_Body_Regular,
                                    color: colors.text_black,
                                    marginBottom: 7,
                                    textAlign: 'center',
                                    
                                    },                                    
                                },
                                'stylesheet.calender.basic.day':{
                                    text: {
                                        ...Smallest_Body_Regular,
                                        color: colors.primary_100,
                                        backgroundColor: colors.primary_100,
                                    },
                                }
                            }}
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            // markedDates={{
                            //     [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                            // }}
                        />
                    </SafeAreaView>
                </View>
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

export default Home

