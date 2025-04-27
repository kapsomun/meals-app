import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style='dark' />
    </SafeAreaProvider>
  );
};

export default App;