import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/*this is the design of the task bar and the task itself*/
const Task = (props) => {
    return(
        <View style={styles.items}>
            <View style ={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style ={styles.itemsText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    items :{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft :{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square :{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: '0.4',
        marginRight: 15,
        borderRadius: 5,

    },
    itemsText :{
        maxWidth: '80%',

    },
    circular :{
        width :12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55BCF6'
    },



});



export default Task;

