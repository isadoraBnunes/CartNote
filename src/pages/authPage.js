import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import logo from "../assets/CartNote_logo.png";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image
} from "react-native";

export default class authPage extends Component {
	state = {
		username: "",
		password: "",
		passwordConfirmation: ""
	};
	render() {
		return (
			<View style={styles.mainView}>
				<Image source={logo} style={styles.logo} />
				<View style={styles.options}>
					<Text
						style={styles.option}
						onPress={() => {
							console.log("aaa");
						}}
					>
						entrar
					</Text>
					<Text style={styles.option} onPress={() => {}}>
						cadastrar
					</Text>
				</View>
				<View style={styles.auth}>
					<View style={styles.form}>
						<Icon name="person-outline" style={styles.formIcon} />
						<TextInput
							style={styles.formInput}
							placeholder="Usuário"
							value={this.state.username}
							onChangeText={text => this.setState({ username: text })}
						/>
					</View>
					<View style={styles.form}>
						<Icon name="lock-outline" style={styles.formIcon} />
						<TextInput
							style={styles.formInput}
							placeholder="Senha"
							value={this.state.password}
							onChangeText={text => this.setState({ password: text })}
						/>
					</View>
					<TouchableOpacity style={styles.submitButton}>
						<Text style={styles.submitButtonText}>ENTRAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: "#6155ea",
		alignItems: "center",
		textAlignVertical: "center"
	},
	logo: {
		marginTop: 100,
		marginBottom: 30
	},
	options: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},
	option: {
		flex: 0.4,
		fontSize: 20,
		textAlign: "center",
		color: "#ccc"
	},
	auth: {
		padding: 20,
		borderRadius: 10,
		width: 300,
		flexDirection: "column",
		backgroundColor: "#fff",
		alignItems: "center",
		elevation: 2,
		margin: "auto"
	},
	form: {
		flexDirection: "row",
		textAlignVertical: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#5e51e9"
	},
	formIcon: {
		flex: 0.1,
		color: "#5e51e9",
		fontSize: 24,
		textAlignVertical: "center"
	},
	formInput: {
		flex: 0.9,
		fontSize: 18
	},
	submitButton: {
		marginTop: 25,
		height: 45,
		width: 150,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#2c1ce0",
		elevation: 1
	},
	submitButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold"
	}
});
