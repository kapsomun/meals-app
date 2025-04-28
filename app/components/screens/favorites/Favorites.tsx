import { NavigationProp, useNavigation } from '@react-navigation/core';
import { FC, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import { FavoritesContext } from '@/store/favorites-context';
import { RootState } from '@/store/redux/store';

const Favorites: FC = () => {
	// const favorites = useContext(FavoritesContext);
	const favoritesMeals = useSelector(
		(state: RootState) => state.favorites.favorites,
	);
	const navigation = useNavigation<NavigationProp<TypeRootStackParamList>>();

	const handlePress = (id: string) => {
		navigation.navigate('MealDetails', { mealId: id });
	};
	const favoriteMeals = favoritesMeals.map(favorite => {
		return favorite;
	});

	if (favoriteMeals.length === 0) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>No favorite meals yet!</Text>
			</View>
		);
	}

	return (
		<View style={{ padding: 16 }}>
			{favoriteMeals.map(meal => (
				<TouchableOpacity onPress={() => handlePress(meal.id)} key={meal.id}>
					<View key={meal.id} style={{ marginBottom: 12 }}>
						<Text style={{ fontSize: 18 }}>{meal.title}</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Favorites;
