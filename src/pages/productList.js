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
	renderProductsListSchema = ({ProductsList}) => {
		return (
			<View style={styles.mainView}>
				<TouchableOpacity style={styles.addButton}>
					<Icon name="add" color={"#fff"} size={50} />
				</TouchableOpacity>
				<View style={styles.header}>
					<Image source={logo} style={styles.logo} />
				</View>
				<Icon name="keyboard-arrow-down" color={"#fff"} size={16} />
				<ScrollView style={styles.list}>
					<Text style={styles.productListName}>{ProductsList.name}</Text>
				</ScrollView>
			</View>
		);
	}

	render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={ ProductsList => ProductsList._id}
                    renderProductsListSchema={this.renderProductsListSchema}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
	mainView: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#6155ea",
		alignContent: "center",
		alignItems: "center",
		textAlignVertical: "center"
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
	productListName:{
		color: '#FFF'
	}
});
