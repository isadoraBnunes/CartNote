import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF"
  },
  header: {
    height: 75,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#6155ea"
  },
  logo: {
    flex: 0.9,
    resizeMode: "contain"
  },
  noneContainerInput: {
    display: "none"
  },
  containerInput: {
    width: "100%"
  },
  inputContainer: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#6155ea",
  },
  formInput: {
    flex: 1,
    fontSize: 20,
    color: "#6155ea",
    alignItems: "center",
  },
  buttonConfirm: {
    width: 45,
    height: "100%",
    borderRadius: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    margin: "3%",
    padding: 15,
    elevation: 2,
    borderRadius: 3,
    backgroundColor: "#FFF",
    justifyContent: "space-around"
  },
  containerList: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  productListName: {
    flex: 1,
    fontSize: 20,
    color: "#2c1ce0"
  },
  productListButton: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonFooter: {
    elevation: 1,
    alignItems: "flex-end"
  },

  list: {
    padding: 20
  }
  // footer: {
  //   flex: 0.6,
  //   padding: 2,
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "flex-end",

  //   backgroundColor: "#6155ea"
  // },
  // textFooter: {
  //   color: "#FFF",
  //   alignItems: "center",
  //   flex: 0.5,
  //   fontSize: 18
  // },
});
export default styles;
