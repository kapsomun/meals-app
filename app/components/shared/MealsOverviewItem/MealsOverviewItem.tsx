import { NavigationProp, useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import styles from './meals-overview-item.styles';

export type MealsOverviewItemProps = {
	id: string;
	title: string;
	affordability: string;
	imageUrl: string;
	duration: number;
	isGlutenFree: boolean;
	isLactoseFree: boolean;
	ingredients: string[];
	steps: string[];
};

const MealsOverviewItem: FC<MealsOverviewItemProps> = ({
	id,
	title,
	affordability,
	duration,
	imageUrl,
	isLactoseFree,
	isGlutenFree,
}) => {
	const navigation = useNavigation<NavigationProp<TypeRootStackParamList>>();

	const handlePress = (id: string) => {
		navigation.navigate('MealDetails', { mealId: id });
	};

	return (
		<View style={styles.mealContainer}>
			<TouchableOpacity onPress={() => handlePress(id)}>
				<Image source={{ uri: imageUrl }} style={styles.mealImage} />
				<Text style={styles.mealTitle}>{title}</Text>
				<Text style={styles.mealAffordability}>{affordability}</Text>
				<View style={styles.mealDetails}>
					<Text>{duration}m</Text>
					<Text>{isGlutenFree ? 'Gluten Free' : 'Not Gluten Free'}</Text>
					<Text>{isLactoseFree ? 'Lactose Free' : 'Not Lactose Free'}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealsOverviewItem;
