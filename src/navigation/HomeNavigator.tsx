import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArchiveScreen, HomeScreen } from './screens';
import EditTodoButton from '../components/EditTodoButton';
import { HomeScreens } from './screens/Screens';

export const HomeNavigator = createBottomTabNavigator({
  screens: {
    [HomeScreens.Home]: {
      screen: HomeScreen,
      options: {
        headerRight: (props) => {
          return <EditTodoButton />;
        },
      },
    },
    [HomeScreens.Archive]: ArchiveScreen,
  },
  screenOptions: {
    headerRightContainerStyle: { paddingRight: 12 },
    headerLeftContainerStyle: { paddingLeft: 12 },
  },
});
