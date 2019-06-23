import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
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
                <TouchableOpacity style={styles.productButton} onPress={() => { api.delete(`/products/${ProductSchema._id}`) }}>
                    <Icon name="delete" color={"#2c1ce0"} size={50} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6155ea"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,

        shadowColor: "red",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 2
    },
    containerList: {
        flexDirection: "row"
    },
    productDescription: {
        fontSize: 16,
        color: "#696969"
    },
    productUnit: {
        fontSize: 16,
        color: "#999"
    },
    productQuantity: {
        fontSize: 16,
        color: "#999"
    },
    productButton: {
        position: "absolute",
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        right: 30,
        bottom: 30,
        // borderRadius: 50,
        // backgroundColor: "#2c1ce0",
        elevation: 3
    },
});

