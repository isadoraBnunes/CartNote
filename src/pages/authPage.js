import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import logo from "../assets/CartNote_logo.png";
import styles from "./styles/authPageStyle";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import api from "../services/api";

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
					const response = await api.post("user", {
						name: this.state.username,
						password: this.state.password
					});
					console.log(response);
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
					<View
						style={
							this.state.selectedOption === "ENTRAR"
								? styles.authForm
								: styles.hidden
						}
					>
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

					<View
						style={
							this.state.selectedOption === "CADASTRAR"
								? styles.authForm
								: styles.hidden
						}
					>
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
						onPress={() => {
							this.handleSubmit();
						}}
					>
						<Text style={styles.submitButtonText}>
							{this.state.selectedOption}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
