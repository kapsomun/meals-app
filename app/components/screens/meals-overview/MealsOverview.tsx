import { useRoute } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import { FC } from 'react';
import { FlatList } from 'react-native';

import MealsOverviewItem from '@/components/shared/MealsOverviewItem/MealsOverviewItem';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import { MEALS } from '@/data/data';

type MealsOverviewRouteProp = RouteProp<
	TypeRootStackParamList,
	'MealsOverview'
>;

const MealsOverview: FC = () => {
	const route = useRoute<MealsOverviewRouteProp>();
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter(meal =>
		meal.categoryIds.includes(categoryId),
	);

	return (
		<FlatList
			data={displayedMeals}
			keyExtractor={meal => meal.id}
			renderItem={({ item }) => <MealsOverviewItem {...item} />}
		/>
	);
};

export default MealsOverview;
