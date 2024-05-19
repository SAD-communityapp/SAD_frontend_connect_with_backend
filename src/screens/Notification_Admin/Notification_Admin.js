//Notification Admin
// 其實是 admin
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors/colors";
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { H3, Small_Body_Bold, Body_Regular, Body_bold } from '../../assets/TextStyles';
import { useNavigation, useRoute } from '@react-navigation/native';


const Notification_Admin = () => {

    const navigation = useNavigation();
    const route = useRoute();
    

    const [notifications, setNotifications] = useState([
        { id: 1, title: '水塔清洗通知', date: '2024/03/21', building: 'A 棟 5 樓之一', details: '明日 09:00~17:00 A 棟清洗水塔，詳情請看相關公告。' },
        { id: 2, title: '包裹到貨通知', date: '2024/03/18', building: 'B 棟 7 樓', details: '您的包裹已到達，請於 03/28 前取件。' },
        // Add additional notifications with building field
    ]);
    
    useEffect(() => {
        if (route.params?.newNotification) {
            setNotifications(prev => [route.params.newNotification, ...prev]);
        }
    }, [route.params?.newNotification]);

    const [filterBuilding, setFilterBuilding] = useState('All'); // Filter state
    
    const filteredNotifications = filterBuilding === 'All' ? notifications : notifications.filter(n => n.building.includes(filterBuilding));

    const [viewedNotifications, setViewedNotifications] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 13;
    const totalPages = Math.ceil(notifications.length / itemsPerPage);

    
    const NotificationItem = ({ id, date, title, building, details, onExpand, isLast }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleItem = () => {
            setIsOpen(!isOpen);
            onExpand(id);
            if (isOpen) {

                setNotifications(prevNotifications => 
                    prevNotifications.map(notification => 
                        notification.id === id ? { ...notification } : notification
                    )
                );
                
                setViewedNotifications(prevViewedNotifications => {
                    const updatedViewedNotifications = new Set(prevViewedNotifications);
                    updatedViewedNotifications.add(id);
                    return updatedViewedNotifications;
                });
            }
        };
    
        return (
            <TouchableOpacity activeOpacity={1} onPress={toggleItem} style={isLast == true? styles.item_last: styles.item}>
                <View style={styles.itemHeader}>
                    <View style={[styles.cell, styles.dateContainer]}>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={[styles.cell, styles.titleContainer]}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={[styles.cell, styles.buildingContainer]}>
                        <Text style={styles.building}>{building}</Text>
                    </View>
                    <View style={[styles.cell, styles.iconContainer]}>
                        <MaterialIcons name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={colors.icon_dark} />
                    </View>
                </View>
                {isOpen && (
                    <View style = {styles.bodyContainer}>
                        <View style = {styles.bodySmallContainer}>
                            <Text style={styles.bodyText}>{details}</Text>

                        </View>
                        
                    </View>
                        
                )}
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


    const navigateToAddNotification = () => {
        const maxId = Math.max(...notifications.map(n => n.id), 0)
        navigation.navigate('AddNotification', {maxId});
    };


    const addNotification = () => {
        console.log("Adding new notification");  // Implement functionality as needed
    };
    
    const FilterTab = ({ label, text }) => (
        <TouchableOpacity
            style={[styles.filterTab, filterBuilding === label ? styles.filterTabActive : {}]}
            onPress={() => setFilterBuilding(label)}
        >
            <Text style={[styles.filterTabText, filterBuilding === label ? styles.filterTabTextActive : {}]}>
                {text}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ backgroundColor: colors.background_white, height: '100%' }}>
            <View style={{ height: 97 }}>
                <LinearGradient
                    colors={['#FCF3D0', '#D6E2D7', '#BED7DC']}
                    style={{ flex: 1, height: 97, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                >
                    <Text style={{ ...H3, fontWeight: 'bold', color: colors.text_white, paddingTop: 49, paddingLeft: 16 }}>
                        通知
                    </Text>
                </LinearGradient>
            </View>
            {/* 新增公告 Button on top of Filter Tabs */}
            <View style={styles.addButtonContainer}>
                <Button primary_filled={true} iconLibrary={AntDesign} icon="plus" title= '新增通知' onPress={navigateToAddNotification} />
            </View>

            {/* Filter Tabs */}
            <View style={styles.filterContainer}>
                <FilterTab label="All" text="全部通知" onPress={() => setFilterBuilding('All')} />
                <FilterTab label="A 棟" text="A 棟" onPress={() => setFilterBuilding('A 棟')} />
                <FilterTab label="B 棟" text="B 棟" onPress={() => setFilterBuilding('B 棟')} />
                <FilterTab label="C 棟" text="C 棟" onPress={() => setFilterBuilding('C 棟')} />
            </View>

            <ScrollView style={{marginHorizontal: 20 }}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.headerText, { flex: 3 }]}>日期</Text>
                    <Text style={[styles.headerText, { flex: 3 }]}>標題</Text>
                    <Text style={[styles.headerText, { flex: 3 }]}>門牌</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}></Text>
                </View>
                {filteredNotifications.map((notification, index) => (
                    <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        title={notification.title}
                        date={notification.date}
                        building={notification.building}
                        details={notification.details}
                        onExpand={() => {}}
                        isLast={index === filteredNotifications.length - 1}
                    />
                ))}
                <View style={styles.pagination}>
                    <Button primary_filled={true} iconLibrary={AntDesign} icon="left" onPress={() => handlePageChange('prev')} />
                    <Text style={{ marginHorizontal: 20, fontSize: 16, color: colors.text_dark }}>{currentPage}</Text>
                    <Button primary_filled={true} iconLibrary={AntDesign} icon="right" onPress={() => handlePageChange('next')} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    addButtonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 16,
        paddingRight: 20,
        backgroundColor: colors.background_white, // Adjust color as needed
    },
    addButton: {
        backgroundColor: colors.primary_75, // Choose a color that fits your app's theme
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    addButtonText: {
        fontSize: 16,
        color: 'white', // Ensure text is visible against the button background
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // This centers the filter tabs horizontally
        backgroundColor: colors.background_white,
        marginHorizontal: 20,
        borderBottomColor: 'lightgray',
    },
    filterTab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8   
    },
    filterTabActive: {
        borderBottomWidth: 4,
        borderBottomColor: colors.primary_100, // Highlight color for active tab
    },
    filterTabText: {
        ...Body_bold,
        color: colors.tertiary_75,
    },
    filterTabTextActive: {
        color: colors.primary_100, 
        fontWeight: 'bold',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.primary_50,
        // borderTopRightRadius: 10,
        // borderTopLeftRadius: 10
    },
    headerText: {
        fontWeight: 'bold',
        color: colors.text_white,
        flex: 1,
        textAlign: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    pageNumber: {
        marginHorizontal: 20,
    },
    item: {
        backgroundColor: colors.background_white,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginHorizontal: 0, // Centering the item
    },
    item_last: {
        backgroundColor: colors.background_white,
        // borderBottomColor: 'lightgray',
        marginHorizontal: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.text_white,
    },
    cell: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buildingContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: colors.text_black,
        textAlign: 'center',
        ...Body_Regular,
    },
    date: {
        ...Body_Regular,
        color: colors.text_black,
        textAlign: 'center',
    },
    bodyText: {
        color: colors.text_dark,
        ...Body_Regular,
        textAlign: 'center',
        ...Body_Regular,

    },
    bodyContainer:{
        backgroundColor: colors.text_white,
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    bodySmallContainer:{
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 10,
        backgroundColor: colors.background_gray, 
    }
});


export default Notification_Admin;