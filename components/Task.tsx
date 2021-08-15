import { Box, Checkbox, Pressable } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Platform } from 'react-native';

const isMobile = Platform.OS == 'android' || Platform.OS == 'ios';

interface ITask {
    //id: string,
    //cheked: boolean,
    denomination: string,
    //hasDescription: boolean,
}

export default function TaskC(props: ITask) {
    return (
        <View style={styles.container}>
            <Checkbox value={"false"}/>
            <Pressable style={{flex: 1}}>
                <Box style={styles.body}>
                    <Text style={styles.denomination} numberOfLines={1}>{props.denomination}</Text>
                    <Text style={styles.date}>before 05/07</Text>
                </Box>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    check: {
        height: 20,
        width: 20,
        backgroundColor: '#EEE',
        borderRadius: 5,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
    },
    denomination: {
        flexShrink: 1,
        flexGrow: 0,
        marginLeft: 12,
        textAlignVertical: 'center',
    },
    date: {
        flexShrink: 0,
        flexGrow: 1,
        marginLeft: 10,
        color: '#EEE',
        fontStyle: 'italic',
        textAlignVertical: 'center',
    }
});