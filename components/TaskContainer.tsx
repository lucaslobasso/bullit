import { Box, Flex, Heading } from 'native-base';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Task from './Task';

const isMobile = Platform.OS == 'android' || Platform.OS == 'ios';

interface ITaskContainer {
    title: string;
}

export default function TaskContainer(props: ITaskContainer) {
    return (
        <Flex style={styles.container}>
            <Box style={styles.header}>
                <Heading style={styles.title}>{props.title}</Heading>
            </Box>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
            <Task denomination={"Prueba"}/>
        </Flex>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: isMobile ? 20 : 0,
        marginRight: isMobile ? 0 : 40,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    }
});