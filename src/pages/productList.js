import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import logo from "../assets/CartNote_logo.png";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image
} from "react-native";

export default class productList extends Component {
	state = {
		username: "Willian" //teste
	};
	renderProductsListSchema = ({ ProductsList }) => {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.productListButton} onPress={() => {api.delete(`/productList/${ProductsList._id}`)}}>
					<Icon name="delete" color={"#6155ea"} size={30}/>
				</TouchableOpacity>
				<Text style={styles.productListName}>{ProductsList.name}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.mainView}>
				<TouchableOpacity style={styles.addButton}>
					<Icon name="add" color={"#fff"} size={50} />
				</TouchableOpacity>
				<View style={styles.header}>
					<Image source={logo} style={styles.logo} />
				</View>
				<Icon name="keyboard-arrow-down" color={"#fff"} size={16} />

				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={ProductsList => ProductsList._id}
					renderProductsListSchema={this.renderProductsListSchema}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		borderRadius: 2,
		padding: 20,
		marginBottom: 20,

		shadowColor: "6155ea",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.4,
		shadowRadius: 5,
		elevation: 2
	},
	list: {
		padding: 20
	},
	mainView: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#6155ea",
		alignContent: "center",
		alignItems: "center",
		textAlignVertical: "center"
	},
	productListButton:{
		
	},
	addButton: {
		position: "absolute",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
		borderRadius: 50,
		backgroundColor: "#2c1ce0",
		elevation: 3
	},
	header: {
		flex: 0.05,
		flexDirection: "column",
		alignItems: "center",
		textAlignVertical: "center",
		marginTop: 10
	},
	logo: {
		flex: 1,
		resizeMode: "contain"
	},
	list: {
		flex: 1,
		width: 340,
		marginBottom: 20,
		// backgroundColor: "#fff"
	},
	productListName: {
		color: '#FFF'
	}
});
