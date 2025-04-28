import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from '@/navigation/Navigation';

import FavoritesContextProvider from '@/store/favorites-context';
import { store } from '@/store/redux/store';

const App = () => {
	return (
		// <FavoritesContextProvider>
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
				<StatusBar style='dark' />
			</SafeAreaProvider>
		</Provider>

		// </FavoritesContextProvider>
	);
};

export default App;
