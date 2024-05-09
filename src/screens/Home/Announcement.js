import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../assets/colors/colors";
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
// import DataTable from "react-data-table-component";
import Feather from 'react-native-vector-icons/Feather';
const announcements = [
    { id: 1, title: '公告1', content: '這是公告1的內容' },
    { id: 2, title: '公告2', content: '這是公告2的內容' },
    { id: 3, title: '公告3', content: '這是公告3的內容' },
    // 根据需要添加更多公告
  ];


const AnnouncementTable = props => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  const handlePress = (announcement) => {
    // Handle navigation to the announcement details screen
    console.log("Navigating to announcement:", announcement.title);
  };

  return (
    <View style={styles.table}>
        
    {/*Table container*/}
      {/* <FlatList
        data={announcements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming each announcement has a unique ID
      /> */}
      {/*Table head */}
      <View style = {styles.table_tab}>
        <View style={{minWidth: 90, width: '100%' ,justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>日期</Text>
        </View>
        <View style={{minWidth: 142, width: '100%' ,justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>標題</Text>
        </View>
        <View style={{minWidth: 90, width: '100%' ,justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>類別</Text>
        </View>
        <View style={{minWidth: 18, width: '100%' ,justifyContent: 'center', paddingHorizontal: 8}}>
        </View>
      </View>

      <View style = {styles.table_head}>
        <View style={{minWidth: 90, flex: 1, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>日期</Text>
        </View>
        <View style={{minWidth: 142, flex: 1, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>標題</Text>
        </View>
        <View style={{minWidth: 90, flex: 1, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>類別</Text>
        </View>
        <View style={{minWidth: 18, flex: 1, justifyContent: 'center', paddingHorizontal: 8}}>
        </View>
      </View>

        {/*Table body */}
        {/*Row 1 */}
      <View style = {styles.table_body}>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 142, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
{/*Row 2 */}
      <View style = {styles.table_body}>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 142, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style = {styles.table_body}>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 142, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style = {styles.table_body}>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 142, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 1, paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style = {styles.table_body_last}>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 142, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 1,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    table:{
        margin: 8,
        width: '100%',
        flex: 1
    },
    table_tab:{

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
        textAlign: 'center'
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
        borderBottomLeftRadius: 10
    },
    table_data:{
        ...Body_Regular,
        textAlign: 'center'
    },
    iconContainer:{
        justifyContent: 'center',
    },
    tab:{

    }
});

export default AnnouncementTable;
