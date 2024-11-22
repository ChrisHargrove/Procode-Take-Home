import { RootNavigator } from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Store, StorePersistor } from './src/storage/Store';
import { PersistGate } from 'redux-persist/integration/react';

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
