import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import ResultScreen from "./src/screens/ResultScreen";
import CharacterDetailScreen from "./src/screens/CharacterDetailScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import CreateListScreen from "./src/screens/CreateListScreen";
import CurrentListScreen from "./src/screens/CurrentListScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import UserListScreen from "./src/screens/UserListScreen";
import ListScreen from "./src/screens/ListScreen";
import ListShowScreen from "./src/screens/ListShowScreen";
import CreateListScreen2 from "./src/screens/CreateListScreen2";
import EditScreen from "./src/screens/EditScreen";
import DetailScreen from "./src/screens/DetailScreen";
import { Provider } from "./src/context/ListContext";

const navigator = createStackNavigator({
        Welcome : WelcomeScreen,
        Login: LoginScreen,
        Search: SearchScreen,
        Profile: ProfileScreen,
        Character: CharacterScreen,
        CharacterDetail: CharacterDetailScreen,
        CreateAccount: CreateAccountScreen,
        CreateList: CreateListScreen,
        CurrentList: CurrentListScreen,
        UserList: UserListScreen,
        ResultScreen: ResultScreen,
        List: ListScreen,
        Show: ListShowScreen,
        Create: CreateListScreen2,
        Edit: EditScreen,
        DetailScreen: DetailScreen,

},
{
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            title : "Comics Universe"
        }

});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
      <App />
  </Provider>
}
