import React, { Component } from "react";
import styles from "./styles/productStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Image
} from "react-native";

export default class product extends Component {
	state = {
		description: "arroz",
		unit: 5,
		quantity: 4
	};

	renderProductSchema = ({ ProductSchema }) => {
		return (
			<View style={styles.productContainer}>
				<View style={styles.containerList}>
					<Text style={styles.productDescription}>{ProductSchema.description}</Text>
				</View>
				<View style={styles.containerList}>
					<Text style={styles.productUnit}>{ProductSchema.unit}</Text>
				</View>
				<View style={styles.containerList}>
					<Text style={styles.productQuantity}>{ProductSchema.quantity}</Text>
				</View>
				<TouchableOpacity style={styles.productButton} onPress={() => {api.delete(`/products/${ProductSchema._id}`)}}>
					<Icon name="delete" color={"#6155ea"} size={30} />
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={ProductSchema => ProductSchema._id}
					renderProductSchema={this.renderProductSchema}
				/>
			</View>
		);
	}
}
