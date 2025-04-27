import Categories from '@/components/screens/categories/Categories';
import MealDetails from '@/components/screens/meal-details/MealDetails';
import MealsOverview from '@/components/screens/meals-overview/MealsOverview';

import { IRoute } from './navigation.types';

export const routes: IRoute[] = [
	{
		name: 'Categories',
		component: Categories,
	},
	{
		name: 'MealsOverview',
		component: MealsOverview,
	},
	{
		name: 'MealDetails',
		component: MealDetails,
	},
];
