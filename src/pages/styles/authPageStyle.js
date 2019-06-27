import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: "#6155ea",
		alignItems: "center",
		textAlignVertical: "center"
	},
	logo: {
		marginTop: 100,
		marginBottom: 30
	},
	options: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},
	option: {
		flex: 0.4,
		fontSize: 20,
		textAlign: "center",
		color: "#FFF",
		opacity: 0.4
	},
	selectedOption: {
		opacity: 1
	},
	auth: {
		padding: 20,
		borderRadius: 10,
		width: "80%",
		flexDirection: "column",
		backgroundColor: "#fff",
		alignItems: "center",
		elevation: 2,
		margin: "auto"
	},
	hidden: {
		display: "none"
	},
	authForm: {
		width: "100%"
	},
	form: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#5e51e9",
		height: 45
	},
	formIcon: {
		flex: 0.1,
		color: "#5e51e9",
		fontSize: 24,
		textAlignVertical: "center"
	},
	formInput: {
		alignItems: "center",
		flex: 0.9,
		fontSize: 18
	},
	submitButton: {
		marginTop: 25,
		height: 45,
		width: 150,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#2c1ce0",
		elevation: 1
	},
	submitButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold"
	}
});
export default styles;
