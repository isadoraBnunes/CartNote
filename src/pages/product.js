import React, { Component } from "react";
import styles from "./styles/productStyle";
import ListItem, { Separator } from "./pages/ListItem";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";

export default class product extends Component {
  state = {
    product: {},
    docs: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const response = await api.get("/product");

      const { docs, ...product } = response.data;

      this.setState({
        docs: [...this.state.docs, ...docs],
        product
      });
    } catch (error) {
      console.log(error);
    }
  };

  // renderItem = ({ item }) => {
  // 	return (
  // 		<View style={styles.productContainer}>
  // 			<View style={styles.containerList}>
  // 				<Text style={styles.productDescription}>banana</Text>
  // 			</View>
  // 			<View style={styles.containerList}>
  // 				<Text style={styles.productUnit}>kg</Text>
  // 			</View>
  // 			<View style={styles.containerList}>
  // 				<Text style={styles.productQuantity}>2</Text>
  // 			</View>
  // 			{/* <TouchableOpacity style={styles.productButton} onPress={() => {api.delete(`/products/${ProductSchema._id}`)}}>
  // 				<Icon name="delete" color={"#6155ea"} size={30} />
  // 			</TouchableOpacity> */}
  // 		</View>
  // 	);
  // };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={quotes}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <ListItem
              {...item}
              onSwipeFromLeft={() => alert("esquerda")}
              onRightPress={() => alert("direita")}
            />
					)}
					itemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
	}
	
	const quotes = [
		{id: "0", text: "test"},
		{id: "1", text: "test"},
		{id: "2", text: "test"},
		{id: "3", text: "test"},
		{id: "4", text: "test"},
	]

}
