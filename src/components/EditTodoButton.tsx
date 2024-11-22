import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from '../navigation/screens/Screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../navigation/RootNavigator';

type Props = {
  todoId?: string;
};

const EditTodoButton = ({ todoId }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  function onPress() {
    navigation.navigate(RootScreens.EditTodo, { todoId });
  }

  return (
    <TouchableOpacity hitSlop={15} onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        {todoId === undefined ? 'New Todo' : 'Edit Todo'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 24,
    borderRadius: 4,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default EditTodoButton;
