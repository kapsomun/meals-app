import { ComponentType } from 'react';

export type TypeRootStackParamList = {
  Drawer: undefined;
	Categories: undefined;
	MealsOverview: { categoryId: string };
	MealDetails: { mealId: string };
	Favorites: undefined;
};

export interface IRoute {
	name: keyof TypeRootStackParamList;
	component: ComponentType;
}
