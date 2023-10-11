/*
* Task Component
* @author tranhungnhat
*/

import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {

    const [strikeThrough, setStrikeThrough] = useState(false);
    const [checkedCircle, setCheckedCircle] = useState(true);

    const toggleStrikeThrough = () => {
        setStrikeThrough(!strikeThrough);
        setCheckedCircle(!checkedCircle);
    };

    return (
        <View style={styles.item}>
            <View style={
                checkedCircle ? styles.circle : styles.circleChecked
            } />
            <View style={styles.itemRight}>
                <Text style={
                    strikeThrough ? styles.strikeThroughTask : styles.normalTask
                }
                onPress={toggleStrikeThrough}>{props.text}</Text>
            </View>

        </View>

    )
}

// Stylesheet for Task, circle, and strike-through text
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F1FAEE',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7,},
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },

    circle: {
        width: 20,
        height: 20,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    circleChecked: {
        width: 20,
        height: 20,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },

    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    strikeThroughTask: {
        fontSize: 15,
        textDecorationLine: "line-through",
        color: "red",
    },

    normalTask: {
        fontSize: 15,
        color: "blue",
    },

});

export default Task;