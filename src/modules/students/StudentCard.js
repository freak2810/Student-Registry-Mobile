import { Layout, withStyles, Text, ListItem, StyleService } from '@ui-kitten/components';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function StudentCard(props) {

    return <TouchableOpacity activeOpacity={0.5} style={styles.container}>
        <Text category="h6">{props.name}</Text>
        <Text category="s2">{props.rollNo}</Text>
    </TouchableOpacity>;

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222B45',
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
    },
});