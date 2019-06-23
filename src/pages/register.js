import React, { Component } from "react";
import { StyleSheet } from "react-native";

import {
	Provider as PaperProvider,
	Surface,
	Button,
	Title,
	TextInput
} from "react-native-paper";

const styles = StyleSheet.create({
	PaperProvider: {
		backgroundColor: "#87CEFA"
	},
	title: {
		justifyContent: "center",
		fontSize: 16
	},
	surface: {
		width: 150,
		height: 150,
		elevation: 4,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFFFFF"
	},
	TextInput: {
		borderColor: "#4682B4",
		color: "#FFFFFF"
	}
});

export default class register extends Component {
	state = {
		username: "",
		password: "",
		passwordConfirmation: ""
	};
	render() {
		return (
			<PaperProvider>
				<Title style={styles.title}>CartNote</Title>

				<Button style={styles.Loginbottom} mode="contained" onPress={() => {}}>
					{" "}
					Login{" "}
				</Button>
				<Button style={styles.SignUpbottom} mode="contained" onPress={() => {}}>
					{" "}
					Sign Up{" "}
				</Button>

				<Surface style={styles.surface}>
					<Surface style={styles.surfaceLogin}>
						<TextInput
							label="Username"
							value={this.state.username}
							onChangeText={text => this.setState({ username: text })}
						/>
						<TextInput
							label="Senha"
							value={this.state.text}
							onChangeText={text => this.setState({ password: text })}
						/>
						<Button
							style={styles.surfacebottomLogin}
							mode="contained"
							onPress={() => {}}
						>
							{" "}
							Login{" "}
						</Button>
					</Surface>

					<Surface style={styles.surfaceSignUp}>
						<TextInput
							label="Username"
							value={this.state.text}
							onChangeText={text => this.setState({ username: text })}
						/>
						<TextInput
							label="Senha"
							value={this.state.text}
							onChangeText={text => this.setState({ password: text })}
						/>
						<TextInput
							label="Confirme sua Senha"
							value={this.state.text}
							onChangeText={text =>
								this.setState({ passwordConfirmation: text })
							}
						/>
						<Button
							style={styles.surfaceBottomSignUp}
							mode="contained"
							onPress={() => {}}
						>
							{" "}
							Sign Up{" "}
						</Button>
					</Surface>
				</Surface>
			</PaperProvider>
		);
	}
}
