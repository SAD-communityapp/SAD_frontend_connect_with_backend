import React, {useState, useEffect}from "react";
import {ScrollView, SafeAreaView, View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
import colors from '../../assets/colors/colors';
import Button from "../../components/Button";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native';

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

const Home = () => {

    const navigation = useNavigation()
    const route = useRoute();

    const [announcements, setAnnouncements] = useState([
        { id: 1, title: '水塔清洗公告', date: '2024/04/01', category: '最新消息'},
        { id: 2, title: '停電公告', date: '2024/03/27', category: '最新消息'},
        { id: 3, title: '南投一日遊', date: '2024/03/26', category: '里長轉知'},
        { id: 4, title: '2024 2 月報表', date: '2024/03/01', category: '管委會相關'},
        { id: 5, title: '2024 1 月報表', date: '2024/02/01', category: '管委會相關'},
        { id: 6, title: '里民春酒', date: '2024/01/21', category: '里長轉知'},
        { id: 7, title: '2023 12 月報表', date: '2024/01/01', category: '管委會相關'},
        { id: 8, title: '水塔清洗公告', date: '2023/12/22', category: '最新消息'},
        { id: 9, title: '2023 11 月報表', date: '2024/12/01', category: '管委會相關'},
        { id: 10, title: '停電公告', date: '2023/11/20', category: '最新消息'},
        
        // Add additional announcement with building field
    ]);

    useEffect(() => {
        const sortedAnnouncements = [...announcements].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA; // Sort descending (latest date first)
        });
        setAnnouncements(sortedAnnouncements);
    }, []);

    useEffect(() => {
        if (route.params?.newAnnouncement) {
            setAnnouncements(prev => [route.params.newAnnouncement, ...prev]);
        }
    }, [route.params?.newAnnouncement]);

    const [filterCategory, setFilterCategory] = useState('All'); // Filter state
    
    const filteredAnnouncements = filterCategory === 'All' ? announcements : announcements.filter(n => n.category.includes(filterCategory));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(announcements.length / itemsPerPage);

    
    const AnnouncementItem = ({ id, date, title, category, isLast }) => {
    
    
        const handlePress = () => {
            // Handle navigation to the announcement details screen
            //console.log("Navigating to announcement:", announcement.title);
            navigation.navigate("AnnouncementDetail")
        
        };

        return (
            <TouchableOpacity activeOpacity={1} onPress={handlePress} style={isLast == true? styles.item_last: styles.item}>
                <TouchableOpacity activeOpacity={1} style = {isLast == true? styles.table_body_last : styles.table_body} onPress={handlePress}>
                    <View style={{minWidth: 90, flex: 3}}>
                        <Text style={styles.table_data}>{date}</Text>
                    </View>
                    <View style={{minWidth: 90, flex: 2}}>
                        <Text style={styles.table_data}>{title}</Text>
                    </View>
                    <View style={{minWidth: 90, flex: 3}}>
                        <Text style={styles.table_data}>{category}</Text>
                    </View>
                    <View style={styles.iconContainer} onPress={handlePress}>
                    <Feather name="chevron-right" size={18} color={colors.text_black} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    const handlePageChange = (direction) => {
        setCurrentPage(prev => {
            if (direction === 'next' && prev < totalPages) {
                return prev + 1;
            } else if (direction === 'prev' && prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    };

    const FilterTab = ({ label, text }) => (
        <TouchableOpacity
            style={[styles.filterTab, filterCategory === label ? styles.filterTabActive : {}]}
            onPress={() => setFilterCategory(label)}
        >
            <Text style={[styles.filterTabText, filterCategory === label ? styles.filterTabTextActive : {}]}>
                {text}
            </Text>
        </TouchableOpacity>
    );


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
              betweenStartAndEnd: i >= 2 && i <= 6
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
                    <View style={styles.filterContainer}>
                        <FilterTab label="All" text="全部公告" onPress={() => setFilterCategory('All')} />
                        <FilterTab label="最新消息" text="最新消息" onPress={() => setFilterCategory('最新消息')} />
                        <FilterTab label="里長轉知" text="里長轉知" onPress={() => setFilterCategory('里長轉知')} />
                        <FilterTab label="管委會相關" text="管委會相關" onPress={() => setFilterCategory('管委會相關')} />
                    </View>
                    <View style={styles.table_head}>
                        <Text style={[styles.table_caption, { flex: 3 }]}>日期</Text>
                        <Text style={[styles.table_caption, { flex: 3 }]}>標題</Text>
                        <Text style={[styles.table_caption, { flex: 3 }]}>類別</Text>
                        <Text style={[styles.table_caption, { flex: 1 }]}></Text>
                    </View>
                    {filteredAnnouncements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((announcement, index, arr) => (
                        <AnnouncementItem
                            key={announcement.id}
                            id={announcement.id}
                            title={announcement.title}
                            date={announcement.date}
                            category={announcement.category}
                            isLast={index === arr.length - 1}
                        />
                    ))}
                    <View style={styles.pagination_container}>
                        <Button primary_filled={true} iconLibrary={AntDesign} icon="left" onPress={() => handlePageChange('prev')} />
                        <Text style={{ marginHorizontal: 20, fontSize: 16, color: colors.text_dark }}>{currentPage}</Text>
                        <Button primary_filled={true} iconLibrary={AntDesign} icon="right" onPress={() => handlePageChange('next')} />
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 170,
        paddingTop: 16,
        gap: 8,
        width: 170
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // This centers the filter tabs horizontally
        backgroundColor: colors.background_white,
        borderBottomColor: colors.tertiary_50,
    },
    filterTab: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 8,
    },
    
    filterTabActive: {
        borderBottomWidth: 4,
        borderBottomColor: colors.primary_100, // Highlight color for active tab
    },
    filterTabText: {
        ...Body_Regular,
        color: colors.tertiary_75,
    },
    filterTabTextActive: {
        color: colors.primary_100, 
        fontWeight: 'bold',
    },
    table_head:{
        flexDirection: 'row',
        backgroundColor: colors.primary_50,
        paddingVertical: 8,
        paddingHorizontal:8,
        justifyContent: 'center',
        flex: 1
    },
    table_caption:{
        color: colors.text_white,
        ...Body_bold,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    table_body:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.text_white,
        paddingVertical: 8,
        paddingHorizontal:8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    table_body_last:{
        flexDirection: 'row',
        backgroundColor: colors.text_white,
        paddingVertical: 8,
        paddingHorizontal:8,
        justifyContent: 'center',
        borderColor: 'lightgray',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10
    },
    table_data:{
        ...Body_Regular,
        textAlign: 'center'
    },
    table_data_new:{
      ...Body_Regular,
      textAlign: 'center',
      fontWeight: 'bold'
    },
});

export default Home





                {/* <View style={{alignItems: 'center', marginHorizontal: 20, justifyContent: 'center'}}>
                    <AnnouncementTable announcements={announcements} />
                    <View style={styles.pagination_container}>
                    <Button primary_filled={true} iconLibrary={AntDesign} icon="left"onPress={() => {}} />
                        <View style={styles.numberContainer}>                        
                            <Text style={{Title, color: colors.text_black, textAlign: 'right'}}> 1 </Text>
                        </View>
                        <Button primary_filled={true} iconLibrary={AntDesign} icon="right"onPress={() => {}} />
                    </View>
                </View> */}