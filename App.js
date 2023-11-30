import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator({
        Welcome : WelcomeScreen,
        HomeScreen: HomeScreen,
        Character: CharacterScreen,
        ResultScreen: ResultScreen,
},
{
        initialRouteName: "Character",
        defaultNavigationOptions: {
            title : "Business Search"
        }

});


export default createAppContainer(navigator);
