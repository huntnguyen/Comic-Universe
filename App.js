import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator({
        Welcome : WelcomeScreen,
        HomeScreen: HomeScreen
},
{
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            title : "Business Search"
        }

});

export default createAppContainer(navigator);
