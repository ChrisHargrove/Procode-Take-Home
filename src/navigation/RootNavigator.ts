import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditTodoScreen, TodoScreen } from './screens';
import { createStaticNavigation } from '@react-navigation/native';
import { HomeNavigator } from './HomeNavigator';
import { RootScreens } from './screens/Screens';

export type RootParamList = {
  [RootScreens.Root]: undefined;
  [RootScreens.EditTodo]: {
    todoId?: string;
  };
  [RootScreens.Todo]: {
    todoId: string;
  };
};

const Stack = createNativeStackNavigator<RootParamList>({
  initialRouteName: RootScreens.Root,
  screens: {
    [RootScreens.Root]: {
      screen: HomeNavigator,
      options: {
        headerShown: false,
      },
    },
    [RootScreens.EditTodo]: EditTodoScreen,
    [RootScreens.Todo]: TodoScreen,
  },
  screenOptions: {
    headerBackTitle: 'Back',
  },
});

export const RootNavigator = createStaticNavigation(Stack);
