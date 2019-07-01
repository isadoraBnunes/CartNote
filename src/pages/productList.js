import api from "../services/api";
import React, { Component } from "react";
import logo from "../assets/CartNote_logo.png";
// import styles from "../../styles/productListStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	FlatList,
	StyleSheet,
	Image
} from "react-native";
export default class productList extends Component {
	state = {
		docs: [],
		newListName: "",
		btnNewPressed: false
	};
	componentDidMount() {
		this.loadProductLists();
	}

	loadProductLists = async () => {
		try {
			const response = await api.get("productList");

			this.setState({
				docs: response.data.docs
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleNewList = async () => {
		await api.post("productList", {
			name: this.state.newListName
		});
		this.setState({ btnNewPressed: false, newListName: "" });
		this.loadProductLists();
	};

	handleDeleteList = async itemId => {
		await api.delete("productList/" + itemId);
		this.loadProductLists();
	};

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item}>
				<Text style={styles.itemName}>{item.name}</Text>
				<TouchableOpacity
					style={styles.btnItemBox}
					onPress={() => {
						this.handleDeleteList(item._id);
					}}
				>
					<Icon name="delete" style={styles.btnItem} />
				</TouchableOpacity>
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.fullView}>
				<View style={styles.header}>
					<Image source={logo} style={styles.logo} size={40} />
				</View>

				<ScrollView style={styles.scrollView}>
					<View
						style={
							this.state.btnNewPressed === true ? styles.item : styles.hidden
						}
					>
						<TextInput
							style={styles.nameNew}
							placeholder="Nova Lista de Compras"
							value={this.state.newListName}
							onChangeText={text => this.setState({ newListName: text })}
						/>
						<TouchableOpacity
							style={styles.btnItemBox}
							onPress={() => {
								this.handleNewList();
							}}
						>
							<Icon name="done" style={styles.btnItem} />
						</TouchableOpacity>
					</View>

					<FlatList
						inverted
						data={this.state.docs}
						keyExtractor={item => item._id}
						renderItem={this.renderItem}
					/>
				</ScrollView>

				<TouchableOpacity
					style={styles.btnNew}
					onPress={() => {
						this.setState({ btnNewPressed: true });
					}}
				>
					<Icon name="add" style={styles.iconBtnNew} />
					<Text style={styles.labelBtnNew}>Novo carrinho...</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	hidden: {
		display: "none"
	},
	fullView: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#ddf"
	},
	header: {
		height: 55,
		backgroundColor: "#6155ea",
		alignItems: "center",
		elevation: 2
	},
	logo: { marginTop: 10 },
	btnNew: {
		height: 45,
		backgroundColor: "#eef",
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		flexDirection: "row",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#6155ea",
		elevation: 2
	},
	iconBtnNew: {
		color: "#6155ea",
		fontSize: 36
	},
	labelBtnNew: {
		fontSize: 20,
		color: "#6155ea"
	},
	scrollView: {
		flexDirection: "column",
		backgroundColor: "#eef",
		marginHorizontal: 10,
		marginTop: 10,
		borderRadius: 10
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 10,
		marginTop: 10,
		padding: 10,
		height: 60,
		elevation: 2,
		backgroundColor: "#fff",

		borderRadius: 10
	},
	itemName: {
		fontSize: 20
	},
	btnItemBox: {
		position: "absolute",
		right: 10
	},
	btnItem: {
		fontSize: 36
	},
	nameNew: {
		flex: 1,
		fontSize: 20,
		height: 50
	},
	optionsNew: {
		flexDirection: "row",
		position: "absolute",
		right: 10
	},
	optionNew: {
		fontSize: 36,
		marginLeft: 5
	}
});
