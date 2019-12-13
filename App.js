import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import SurveyCompletedScreen from './screens/SurveyCompletedScreen';
import SurveyScreen from './screens/SurveyScreen';
import SurveyScreenWoman from './screens/SurveyScreenWoman';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const stackNav = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    SignUpScreen: {
        screen: SignUpScreen
    },
    // MainScreen: {
    //     screen: MainScreen
    // },
    SurveyScreen: {
        screen: SurveyScreen
    },
    SurveyScreenWoman:  {
        screen: SurveyScreenWoman
    },
    SurveyCompleted: {
        screen: SurveyCompletedScreen
    }
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;