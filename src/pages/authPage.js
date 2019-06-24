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
import api from "../../services/api";

export default class authPage extends Component {
	state = {
		username: "",
		password: "",
		passwordConfirmation: "",
		selectedOption: "ENTRAR"
	};

	handleSubmit = async () => {
		switch (this.state.selectedOption) {
			case "ENTRAR":
				break;
			case "CADASTRAR":
				if (this.state.passwordConfirmation === this.state.password) {
					await api.post("user", {
						username: this.state.username,
						password: this.state.password
					});
				}
				break;
		}
	};

	render() {
		return (
			<View style={styles.mainView}>
				<Image source={logo} style={styles.logo} />
				<View name="ide" style={styles.options}>
					<Text
						style={styles.option}
						onPress={() => {
							this.setState({ selectedOption: "ENTRAR" });
						}}
					>
						entrar
					</Text>
					<Text
						style={styles.option}
						onPress={() => {
							this.setState({ selectedOption: "CADASTRAR" });
						}}
					>
						cadastrar
					</Text>
				</View>
				<View style={styles.auth}>
					<View style={this.state.selectedOption === "ENTRAR" ? styles.authForm : styles.hidden}>
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
								secureTextEntry={true}
								value={this.state.password}
								onChangeText={text => this.setState({ password: text })}
							/>
						</View>
					</View>

					<View style={this.state.selectedOption === "CADASTRAR" ? styles.authForm : styles.hidden}>
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
								secureTextEntry={true}
								value={this.state.passwordConfirmation}
								onChangeText={text =>
									this.setState({ passwordConfirmation: text })
								}
							/>
						</View>
						<View style={styles.form}>
							<Icon name="lock-outline" style={styles.formIcon} />
							<TextInput
								style={styles.formInput}
								placeholder="Confirme a senha"
								secureTextEntry={true}
								value={this.state.password}
								onChangeText={text => this.setState({ password: text })}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.submitButton}
						onPress={() => { this.handleSubmit(); }}>
						<Text style={styles.submitButtonText}>
							{this.state.selectedOption}
						</Text>
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
		color: "#FFF",
		opacity: 0.6
	},
	auth: {
		padding: 20,
		borderRadius: 10,
		width: "80%",
		flexDirection: "column",
		backgroundColor: "#fff",
		alignItems: "center",
		elevation: 2,
		margin: "auto"
	},
	hidden: {
		display: "none"
	},
	authForm: {
		width: "100%"
	},
	form: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#5e51e9",
		height: 45
	},
	formIcon: {
		flex: 0.1,
		color: "#5e51e9",
		fontSize: 24,
		textAlignVertical: "center"
	},
	formInput: {
		alignItems: "center",
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
