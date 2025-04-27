import {  useRoute } from '@react-navigation/core';
import { FC } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import styles from './meal-details.styles';
import { MEALS } from '@/data/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MealDetailsRouteProp = NativeStackScreenProps<TypeRootStackParamList, 'MealDetails'>;

const MealDetails: FC<MealDetailsRouteProp> = ({ route,navigation }) => {
	const { mealId } = route.params;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
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
		</SafeAreaView>
	);
};

export default MealDetails;
