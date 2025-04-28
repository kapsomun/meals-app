import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import Categories from '@/components/screens/categories/Categories';
import Favorites from '@/components/screens/favorites/Favorites';
import MealDetails from '@/components/screens/meal-details/MealDetails';
import MealsOverview from '@/components/screens/meals-overview/MealsOverview';

import { TypeRootStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Drawer = createDrawerNavigator<TypeRootStackParamList>();

const DrawerNavigation: FC = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				drawerContentStyle: { backgroundColor: '#351401' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#351401',
				drawerActiveBackgroundColor: '#e4baa1',
			}}
		>
			<Drawer.Screen
				name='Categories'
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='list' color={color} size={size} />
					),
				}}
				component={Categories}
			/>
			<Drawer.Screen
				name='Favorites'
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name='star' color={color} size={size} />
					),
				}}
				component={Favorites}
			/>
		</Drawer.Navigator>
	);
};

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#351401' },
					headerTintColor: 'white',
					contentStyle: { backgroundColor: '#3f2f25' },
				}}
			>
				<Stack.Screen
					options={{
						headerShown: false,
					}}
					name='Drawer'
					component={DrawerNavigation}
				/>
				<Stack.Screen name='MealsOverview' component={MealsOverview} />
				<Stack.Screen
					name='MealDetails'
					options={{
						title: 'About the Meal',
					}}
					component={MealDetails}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
