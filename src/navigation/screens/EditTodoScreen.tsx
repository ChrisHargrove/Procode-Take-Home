import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../RootNavigator';
import { RootScreens } from './Screens';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Todo } from '../../models/Todo';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import InputField from '../../components/InputField';
import ConfirmButtons from '../../components/ConfirmButtons';
import { useTodo } from '../../storage/TodoHooks';
import uuid from 'react-native-uuid';

type Props = NativeStackScreenProps<RootParamList, RootScreens.EditTodo>;

const EditTodoScreen = ({ route }: Props) => {
  // Hooks
  const navigation = useNavigation();
  const { todo, createTodo, updateTodo } = useTodo(route.params?.todoId);

  // State
  const [currentTodo, setCurrentTodo] = useState<Todo>(
    todo ||
      ({
        id: uuid.v4(),
      } as Todo)
  );

  useLayoutEffect(() => {
    if (navigation !== undefined && route.params?.todoId === undefined) {
      navigation.setOptions({ title: 'New Todo' });
    }
  }, [navigation, route.params.todoId]);

  function onChangeTitle(text: string) {
    setCurrentTodo((prev) => {
      return {
        ...prev,
        title: text,
      };
    });
  }

  function onChangeDescription(text: string) {
    setCurrentTodo((prev) => {
      return {
        ...prev,
        description: text,
      };
    });
  }

  function onConfirm() {
    if (route.params?.todoId === undefined) {
      createTodo({
        ...currentTodo,
        createdAt: new Date(Date.now()).toDateString(),
      });
    } else {
      updateTodo(currentTodo);
    }
    navigation.goBack();
  }

  function onCancel() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.container}>
        <InputField
          title={'Title'}
          value={currentTodo.title}
          autoFocus={true}
          autoCapitalize={'sentences'}
          onChangeText={onChangeTitle}
        />
        <InputField
          title={'Description'}
          value={currentTodo.description}
          autoCapitalize={'sentences'}
          onChangeText={onChangeDescription}
          multiline={true}
        />
        <ConfirmButtons onCancel={onCancel} onConfirm={onConfirm} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flexGrow: 1, padding: 16, gap: 16 },
  textInputContainer: {
    gap: 4,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

export default EditTodoScreen;
