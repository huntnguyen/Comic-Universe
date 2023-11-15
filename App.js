import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import LoginScreen from "./src/screens/LoginScreen";


const navigator = createStackNavigator({
        Welcome : WelcomeScreen,
        Home: HomeScreen,
        Character: CharacterScreen,
        Login: LoginScreen,
        CreateAccount: CreateAccountScreen
},
{
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            title : "Business Search"
        }

});

export default createAppContainer(navigator);
