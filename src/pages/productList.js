import api from "../services/api";
import React, { Component } from "react";
import logo from "../assets/CartNote_logo.png";
import styles from "./styles/productListStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from "react-native";

export default class productList extends Component {
  state = {
    docs: [],
    name: "",
    productList: {},
    btnListPressed: false
  };

  componentDidMount() {
    this.loadProductList();
  }

  handleSubmit = async () => {
    // const response =
     await api.post("/productList", {
      name: this.state.name
    });
  };

  loadProductList = async () => {
    try {
      const response = await api.get('/productList');
      const { docs, ...productList } = response.data;
      this.setState({
        docs: { ...this.state.docs, ...docs },
        productList
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderProductsList = ({ ProductsList }) => {
    return (
      <View style={styles.container}>
        <View style={style.containerList}>
          <TouchableOpacity
            style={styles.containerBotton}
            onPress={() => {
              this.props.navigation.navigate("product");
            }}
          >
            <Text style={styles.productListName}>{productsList.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.productListButton}
            onPress={() => {
              api.delete(`/productList/${ProductsList._id}`);
            }}
          >
            <Icon name="delete" color={"#6155ea"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} size={40} />
        </View>

        {/* View para conferir se o status é verdadeiro e assim mostrar ou não o input para cadastrar nome da lista */}
        <View
          style={
            this.state.btnListPressed === true
              ? styles.containerInput
              : styles.noneContainerInput
          }
        >
          {/* criação do elemento de cadastro da lista */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              placeholder="Lista"
              value={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
            {/* botão de confirmação para realizar a chamada do método handleSubmit*/}
            <TouchableOpacity
              style={styles.buttonConfirm}
              onPress={() => {
                this.handleSubmit();
                this.setState({ btnListPressed: false });
              }}
            >
              <Icon
                style={styles.CheckButtonConfirm}
                name="check"
                color={"#6155ea"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.docs}
            keyExtractor={ProductsList => ProductsList._id}
            renderProductsList={this.renderProductsList}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.ButtonFooter}
          onPress={() => {
            this.setState({ btnListPressed: true });
          }}
        >
          <Icon name="add" color={"#6155ea"} size={40} />
        </TouchableOpacity>
      </View>
    );
  }
}
