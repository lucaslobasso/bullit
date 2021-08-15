import { StatusBar } from 'expo-status-bar';
import { Flex, NativeBaseProvider, FlatList, Fab, Modal, Input, Button, Text, TextArea, FormControl, Stack } from 'native-base';
import React from 'react';
import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import TaskContainer from './components/TaskContainer';

const isMobile = Platform.OS == 'android' || Platform.OS == 'ios';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Today.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'This week.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'This month.',
  },
];

export default function App() {
  const initialRef = React.useRef(null);
  return (
    <NativeBaseProvider>
      <Flex style={[styles.container, isMobile ? {paddingTop: 40} : {maxHeight: useWindowDimensions().height}]}>
        <FlatList
          style={isMobile ? {paddingHorizontal: 40} : {paddingTop: 40, paddingLeft: 40}}
          data={DATA}
          renderItem={({item}) => <TaskContainer title={item.title}/>}
          keyExtractor={item => item.id}
          numColumns={isMobile ? 1 : 3}
        />
        <Fab
          style={[styles.floatingButton, {bottom: isMobile ? 20 : 40, right: isMobile ? 20 : 40}]}
          label={<Text style={styles.title}>Add task</Text>}
        />
        <Modal isOpen={true} initialFocusRef={initialRef} size={'full'}>
          <Modal.Content style={{marginBottom: 0,  marginTop: "auto",}}>
            <Modal.Header>New task.</Modal.Header>
            <Modal.Body>
              <Stack space={4}>
                <Input
                  mt={4}
                  ref={initialRef}
                  placeholder={"Description"}
                />
                <TextArea h={20} placeholder="Details" />
              </Stack>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>
                <Button>SAVE</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Flex>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#E8EAED',
  },
  webList: {
    flex: 1,
    overflow: 'scroll',
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 40,
  },
  mobileList: {
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 18,
  },
  floatingButton: {
    position: 'absolute',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#E33",
  },
});
