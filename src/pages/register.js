import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    Provider as PaperProvider,
    Surface,
    Button,
    Title,
} from 'react-native-paper';

const styles = StyleSheet.create({
    PaperProvider: {
        backgroundColor: '#87CEFA',
    },
    title: {
        justifyContent: 'center',
        fontSize: 16,
    },
    surface: {
        width: 150,
        height: 150,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    TeyxtInput: {
        borderColor: '#4682B4',
        color: "#FFFFFF",
    }
}

class register extends Component {
        render() {
            return (
                <PaperProvider>

                    <Title style={styles.title}>CartNote</Title>

                    <Button style={styles.Loginbottom} mode="contained" > Login </Button>
                    <Button style={styles.SignUpbottom} mode="contained"> Sign Up </Button>

                    <Surface style={styles.surface}>
                        <Surface style={styles.surfaceLogin}>
                            <TextInput
                                label='Email'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                            />
                            <TextInput
                                label='Senha'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                            />
                            <Button style={styles.surfacebottomLogin} mode="contained" > Login </Button>
                        </Surface>

                        <Surface style={styles.surfaceSignUp}>
                            <TextInput
                                label='Username'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                            />
                            <TextInput
                                label='Email'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                            />
                            <TextInput
                                label='Senha'
                                value={this.state.text}
                                onChangeText={text => this.setState({ text })}
                            />
                            <Button style={styles.surfaceBottomSignUp} mode="contained" > Sign Up </Button>
                        </Surface>
                    </Surface>
                </PaperProvider>
            )
        }
    }
export default register
