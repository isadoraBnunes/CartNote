import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF"
	},
	list: {
		padding: 20
	},
	productContainer: {
		backgroundColor: "#FFF",
		borderRadius: 5,
		padding: 20,
		marginBottom: 20,
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
		// position: "absolute",
		width: 20,
        height: 20,

		alignItems: "flex-end",
		// justifyContent: "center",
		// right: 30,
		// bottom: 30,
		// borderRadius: 50,
		// backgroundColor: "#2c1ce0",
		// elevation: 3
	}
});

export default styles;