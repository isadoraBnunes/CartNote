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
    const response = await api.post("productList", {
      name: this.state.name
    });
  };

  loadProductList = async () => {
    try {
      const response = await api.get("/productList");
      const { docs, ...productList } = response.data;
      this.setState({
        docs: { ...this.state.docs, ...docs },
        productList
      });
    } catch (err) {
      console.log(err);
    }
  };

  renderProductsList = ({ ProductsList }) => {
    return (
      <View style={styles.container}>
        <View style={style.containerList}>
          <Text style={styles.productListName}>{ProductsList.name}</Text>
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
          <Image source={logo} style={styles.logo} />
        </View>

        {/* View para conferir se o status é verdadeiro e assim mostrar ou não o input para cadastrar nome da lista */}
        <View
          style={
            this.state.btnListPressed === false
              ? styles.noneContainerInput
              : styles.containerInput
          }
        >
          {/* criação do elemento de cadastro da lista */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              placeholder="Nome da Lista"
              value={this.state.name}
            />
          </View>

          {/* botão de confirmação para realizar a chamada do método handleSubmit*/}
          <TouchableOpacity
            style={style.buttonConfirm}
            onPress={() => {
              <Text style={style.TextButtonConfirm}>Ok</Text>;
              this.handleSubmit();
            }}
          />
        </View>

        <ScrollView>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.docs}
            keyExtractor={ProductsList => ProductsList._id}
            renderProductsList={this.renderProductsList}
          />
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>Criar Lista</Text>

          {/* botão criado para alterar o status do btnListPressed para verdadeiro */}
          <TouchableOpacity
            style={styles.ButtonFooter}
            onPress={() => {
              this.setState({ btnListPressed: true });
              // this.handleSubmit();
            }}
          >
            <Icon name="keyboard-arrow-down" color={"#fff"} size={16} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
