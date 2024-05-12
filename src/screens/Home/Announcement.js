import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, useState, TabBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../assets/colors/colors";
import { H3, Title, Body_Regular, Body_bold, Small_Body_Bold, Small_Body_Regular, Smallest_Body_Regular } from '../../assets/TextStyles';
// import DataTable from "react-data-table-component";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const announcements = [
    { id: 1, title: '公告1', content: '這是公告1的內容' },
    { id: 2, title: '公告2', content: '這是公告2的內容' },
    { id: 3, title: '公告3', content: '這是公告3的內容' },
    // 根据需要添加更多公告
  ];


const tabs = [
  { key: 'all', title: '所有' },
  { key: 'type1', title: '類型1' },
  { key: 'type2', title: '類型2' },
  // 添加更多選項...
];

const AnnouncementTable = props => {
  // const [selectedTab, setSelectedTab] = useState("all"); // 預設選中的選項為 "all"

  // const filteredAnnouncements = announcements.filter(announcement => {
  //   if (selectedTab === 'all') {
  //       return true; // 不篩選，顯示所有公告
  //   } else {
  //       return announcement.type === selectedTab; // 篩選符合選項的公告
  //   }
  // });
  const navigation = useNavigation()

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  const handlePress = (announcement) => {
    // Handle navigation to the announcement details screen
    //console.log("Navigating to announcement:", announcement.title);
    navigation.navigate("AnnouncementDetail")

  };

  return (

    <View style={styles.table}>
      <View style = {styles.table_tab}>
        <View style={styles.table_tab_body_chosen}>
            <Text style = {styles.table_tab_text_chosen}>全部公告</Text>
        </View>
        <View style={styles.table_tab_body}>
            <Text style = {styles.table_tab_text}>最新消息</Text>
        </View>
        <View style={styles.table_tab_body}>
            <Text style = {styles.table_tab_text}>里民活動</Text>
        </View>
        <View style={styles.table_tab_body}>
          <Text style={styles.table_tab_text}>管委會相關</Text>
        </View>
      </View>

      {/*Table head */}
      <View style = {styles.table_head}>
        <View style={{minWidth: 90, flex: 3, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>日期</Text>
        </View>
        <View style={{minWidth: 90, flex: 2, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>標題</Text>
        </View>
        <View style={{minWidth: 90, flex: 3, justifyContent: 'center', paddingHorizontal: 8}}>
            <Text style={styles.table_caption}>類別</Text>
        </View>
        <View style={{Width: 18, flex: 1, justifyContent: 'center', paddingHorizontal: 8}}>
        </View>
      </View>

        {/*Table body */}
        {/*Row 1 */}
      <TouchableOpacity activeOpacity={1} style = {styles.table_body} onPress={handlePress}>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data_new}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 90, flex: 2,paddingHorizontal: 8}}>
            <Text style={styles.table_data_new}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data_new}>最新消息</Text>
        </View>
        <View style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
{/*Row 2 */}
<TouchableOpacity activeOpacity={1} style = {styles.table_body} onPress={handlePress}>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 90, flex: 2,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <View style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style = {styles.table_body} onPress={handlePress}>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 90, flex: 2,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <View style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style = {styles.table_body} onPress={handlePress}>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 90, flex: 2,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <View style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style = {styles.table_body_last} onPress={handlePress}>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>2024-04-01</Text>
        </View>
        <View style={{minWidth: 90, flex: 2,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>水塔清洗公告</Text>
        </View>
        <View style={{minWidth: 90, flex: 3,paddingHorizontal: 8}}>
            <Text style={styles.table_data}>最新消息</Text>
        </View>
        <View style={styles.iconContainer} onPress={handlePress}>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
      
      
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
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 1
    },
    table_tab_body:{
      paddingVertical: 8,
      borderBottomWidth: 4,
      borderColor: colors.background_white,
      flex: 1
    },
    table_tab_body_chosen:{
      paddingVertical: 8,
      borderBottomWidth: 4,
      borderColor: colors.primary_100,
      flex: 1
    },
    table_tab_text:{
      color: colors.tertiary_50,
      ...Body_bold,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    table_tab_text_chosen:{
      color: colors.tertiary_100,
      ...Body_bold,
      fontWeight: 'bold',
      textAlign: 'center'
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
    iconContainer:{
        justifyContent: 'center',
    },
});

export default AnnouncementTable;


// import React from 'react';
// import { Text, View } from 'react-native';

// import createServer from 'miragejs';

// if (window.mirageServer) {
//   window.mirageServer.shutdown();
// }

// window.mirageServer = createServer({
//   routes() {
//     this.get('/api/announcements', () => {
//       return {
//         announcements: [
//           {
//             id: 1,
//             name: '水塔清洗',
//             date: '2024-04-10',
//             type: '最新消息',
//           },
//           {
//             id: 2,
//             name: '電梯五月保養時間',
//             date: '2024-04-08',
//             type: '最新消息',
//           },
//           {
//             id: 3,
//             name: '社區大會會議紀錄',
//             date: '2024-04-05',
//             type: '委員會相關',
//           },
//           {
//             id: 4,
//             name: '停電通知',
//             date: '2024-04-02',
//             type: '最新消息',
//           },
//         ],
//       };
//     });
//   },
// });

// export default function Announcement() {
//   let [announcements, setAnnouncements] = React.useState([]);

//   React.useEffect(() => {
//     fetch('/api/announcements')
//       .then(res => res.json())
//       .then(json => setAnnouncements(json.announcements));
//   }, []);

//   return (
//     <View>
//       {announcements.map(announcement => (
//         <Text key={announcement.id}>
//           {announcement.name} ({announcement.date}) {announcement.type}
//         </Text>
//       ))}
//     </View>
//   );
// }

