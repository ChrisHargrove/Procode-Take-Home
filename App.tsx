import { StyleSheet } from 'react-native';
import {RootNavigator} from "./src/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {Store, StorePersistor} from "./src/storage/Store";
import {PersistGate} from "redux-persist/integration/react";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate persistor={StorePersistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
