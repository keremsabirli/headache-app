import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import SurveyCompletedScreen from './screens/SurveyCompletedScreen';
import SurveyScreen from './screens/SurveyScreen';
import MainScreen from './screens/MainScreen';

const stackNav = createStackNavigator({
    MainScreen: {
        screen: MainScreen
    },
    Survey: {
        screen: SurveyScreen
    },
    SurveyCompleted: {
        screen: SurveyCompletedScreen
    }
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;