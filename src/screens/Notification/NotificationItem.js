
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors/colors";

const NotificationItem = ({ id, title, date, hasDot, details, onExpand }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleItem = () => {
        setIsOpen(!isOpen);
        if (!isOpen && hasDot) {
            onExpand(id);
        }
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={toggleItem} style={styles.item}>
            <View style={styles.itemHeader}>
                <View style={[styles.cell, styles.dateContainer]}>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={[styles.cell, styles.titleContainer]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={[styles.cell, styles.dotContainer]}>
                    {hasDot && !isOpen && <View style={styles.dot} />}
                </View>
                <View style={[styles.cell, styles.iconContainer]}>
                    <MaterialIcons name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={colors.icon_dark} />
                </View>
            </View>
            {isOpen && (
                <View style={styles.itemBody}>
                    <Text style={styles.bodyText}>{details}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.background_white,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginHorizontal: 0, // Centering the item
    },
    item_last: {
        backgroundColor: colors.background_white,
        borderBottomWidth: 1,
        // borderBottomColor: 'lightgray',
        marginHorizontal: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        overflow: 'hidden',
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
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
    dotContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 16,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: colors.text_dark,
        textAlign: 'center',
    },
    date: {
        color: colors.text_dark,
        textAlign: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        marginRight: 10,
    },
    bodyText: {
        color: colors.text_dark,
        padding: 10,
        textAlign: 'right',
        backgroundColor: colors.text_white, 
    },
});

export default NotificationItem;
