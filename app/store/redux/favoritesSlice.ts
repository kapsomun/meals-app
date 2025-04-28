import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
	name: 'favorites',

	initialState: {
		favorites: [] as { id: string; title: string }[],
	},
	reducers: {
		addFavorite: (state, action) => {
			const existingIndex = state.favorites.findIndex(
				meal => meal.id === action.payload.id,
			);
			if (existingIndex === -1) {
				state.favorites.push(action.payload);
			}
		},
		removeFavorite: (state, action) => {
			const existingIndex = state.favorites.findIndex(
				meal => meal.id === action.payload.id,
			);
			if (existingIndex !== -1) {
				state.favorites.splice(existingIndex, 1);
			}
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const FavoritesMeals = (state: any) => state.favorites;

export default favoritesSlice.reducer;
