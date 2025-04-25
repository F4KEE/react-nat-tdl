import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task  = (props) => {

    return(

        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor : '#fff',
        padding : 15,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
        flexDirection : 'row',
        allignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
    },

    itemLeft : {
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap',
        
    },

    square : {
        width: 24,
        height: 24,
        backgroundColor : '#55BCF6',
        opacity : 0.4,
        borderRadius : 5,
        marginRight : 15, 
    },

    itemText : {
        maxWidth : '80%',
        fontSize : 16,
        color : '#333333',
    },

    circular : {
        width : 17,
        height : 17,
        borderColor : '#55BCF6',
        borderWidth : 2,
        borderRadius : 50,
    }
})

export default Task;