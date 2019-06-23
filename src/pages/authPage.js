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

	selectedOptionStyle = function() {
		switch (this.state.selectedOption) {
			case "ENTRAR":
				styles.login = {
					width: 260
				};
				styles.signup = {
					width: 0,
					height: 0
				};
				break;
			case "CADASTRAR":
				styles.signup = {
					width: 260
				};
				styles.login = {
					width: 0,
					height: 0
				};
				break;
		}
		console.log(this.state.selectedOption);
		return;
	};

	componentWillMount() {
		this.selectedOptionStyle();
	}

	handleSubmit = async () => {
		const resposta = await api.post("user", {
		  username: this.state.username,
		  password: this.state.password,
		
		});
	
		this.props.navigation.navigate("index");
	  };

	render(props) {
		console.log(this.props);
		return (
			<View style={styles.mainView}>
				<Image source={logo} style={styles.logo} />
				<View name="ide" style={styles.options}>
					<Text
						style={styles.option}
						onPress={() => {
							this.setState({ selectedOption: "ENTRAR" });
							this.selectedOptionStyle();
						}}
					>
						entrar
					</Text>
					<Text
						style={styles.option}
						onPress={() => {
							this.setState({ selectedOption: "CADASTRAR" });
							this.selectedOptionStyle();
						}}
					>
						cadastrar
					</Text>
				</View>
				<View style={styles.auth}>
					<View style={styles.login}>
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

					<View style={styles.signup}>
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
					<TouchableOpacity style={styles.submitButton}>
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
	login: {
		width: 260
	},
	signup: {
		width: 260
	},
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
