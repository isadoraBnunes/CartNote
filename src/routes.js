import { createStackNavigator } from "../node_modules/react-navigation";
import productList from "./pages/productList"
import authPage  from "./pages/authPage";
import product  from "./pages/product";

export default createStackNavigator({
    product,
    authPage,
    productList
  });