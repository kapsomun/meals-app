import { ComponentType } from 'react';

export type TypeRootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}