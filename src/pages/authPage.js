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
				await api
					.post("authenticate", {
						username: this.state.username,
						password: this.state.password
					})
					.then(response => {
						console.warn(response); // redirecionar para a página
					})
					.catch(err => {
						const e = err.response;
						if (e.status === 400 && e.data.error === "User not found")
							console.warn(err.response); // mostrar qual campo está errado
					});
				break;
			case "CADASTRAR":
				if (this.state.passwordConfirmation === this.state.password) {
					await api
						.post("register", {
							username: this.state.username,
							password: this.state.password
						})
						.then(response => {
							this.setState({ password: "", selectedOption: "ENTRAR" });
						})
						.catch(err => {
							//possiveis erros
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
						style={[
							styles.option,
							this.state.selectedOption === "ENTRAR"
								? styles.selectedOption
								: ""
						]}
						onPress={() => {
							this.setState({ selectedOption: "ENTRAR" });
						}}
					>
						signin
					</Text>
					<Text
						style={[
							styles.option,
							this.state.selectedOption === "CADASTRAR"
								? styles.selectedOption
								: ""
						]}
						onPress={() => {
							this.setState({ selectedOption: "CADASTRAR" });
						}}
					>
						signup
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
