import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 2,
    padding: 20,
    marginBottom: 20,

    shadowColor: "#z6155ea",
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
  productListButton: {},
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
    marginBottom: 20
    // backgroundColor: "#fff"
  },
  productListName: {
    color: "#FFF"
  }
});
export default styles;
