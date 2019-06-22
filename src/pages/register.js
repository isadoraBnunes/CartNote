import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})

class register extends Component {
    render() {
        return (
            <PaperProvider>
                <Appbar>
                    <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
                    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                    <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
                </Appbar>
            </PaperProvider>
        )
    }
}

export default register