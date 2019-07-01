import { createStackNavigator } from "react-navigation";
import authPage from "./pages/authPage";
import productList from "./pages/productList";

export default createStackNavigator(
	{
		authPage,
		productList
	},
	{
		headerMode: "none",
		navigationOptions: {
			headerVisible: false
		}
	}
);
