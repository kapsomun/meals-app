import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC, useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@/components/shared/IconButton/IconButton';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import { FavoritesContext } from '@/store/favorites-context';
import { addFavorite, removeFavorite } from '@/store/redux/favoritesSlice';
import { RootState } from '@/store/redux/store';

import styles from './meal-details.styles';
import { MEALS } from '@/data/data';

type MealDetailsRouteProp = NativeStackScreenProps<
	TypeRootStackParamList,
	'MealDetails'
>;

const MealDetails: FC<MealDetailsRouteProp> = ({ route, navigation }) => {
	const { mealId } = route.params;
	// const { favorites, addFavorite, removeFavorite } =
	// 	useContext(FavoritesContext);
	const favoritesMeals = useSelector(
		(state: RootState) => state.favorites.favorites,
	);
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const isFavorite = favoritesMeals.some(meal => meal.id === mealId);

		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={headerButtonPressHandler}
						name={isFavorite ? 'heart' : 'heart-outline'}
						size={24}
						color='white'
					/>
				);
			},
		});
	}, [navigation, favoritesMeals, mealId]);

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	function headerButtonPressHandler() {
		if (!selectedMeal) return;

		if (favoritesMeals.find(meal => meal.id === selectedMeal.id)) {
			dispatch(removeFavorite({ id: selectedMeal.id }));
		} else {
			dispatch(addFavorite({ id: selectedMeal.id, title: selectedMeal.title }));
		}

		// if (favorites.find(meal => meal.id === selectedMeal.id)) {
		// 	removeFavorite(selectedMeal.id);
		// } else {
		// 	addFavorite({ title: selectedMeal.title, id: selectedMeal.id });
		// }
	}

	if (!selectedMeal) {
		return (
			<SafeAreaView
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			>
				<Text>Meal not found!</Text>
			</SafeAreaView>
		);
	}

	return (
		<ScrollView>
			<View style={styles.content}>
				<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
				<Text style={styles.title}>{selectedMeal.title}</Text>
				<Text style={styles.detailText}>
					Duration: {selectedMeal.duration} minutes
				</Text>
				<Text style={styles.detailText}>
					Affordability: {selectedMeal.affordability}
				</Text>
				<Text style={styles.detailText}>
					Gluten Free: {selectedMeal.isGlutenFree ? 'Yes' : 'No'}
				</Text>
				<Text style={styles.detailText}>
					Lactose Free: {selectedMeal.isLactoseFree ? 'Yes' : 'No'}
				</Text>
				<Text style={styles.detailText}>
					Vegan: {selectedMeal.isVegan ? 'Yes' : 'No'}
				</Text>
				<Text style={styles.detailText}>
					Vegetarian: {selectedMeal.isVegetarian ? 'Yes' : 'No'}
				</Text>

				<Text style={styles.sectionTitle}>Ingredients:</Text>
				<View style={styles.listIngridients}>
					{selectedMeal.ingredients.map(ingredient => (
						<Text key={ingredient} style={styles.IngridientItem}>
							{ingredient}
						</Text>
					))}
				</View>

				<Text style={styles.sectionTitle}>Steps:</Text>
				{selectedMeal.steps.map(step => (
					<Text key={step} style={styles.listItem}>
						{step}
					</Text>
				))}
			</View>
		</ScrollView>
	);
};

export default MealDetails;
