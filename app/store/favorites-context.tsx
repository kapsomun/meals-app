import { createContext, useState } from 'react';


type FavoritesType = {
    title: string,
    id: string,
}


export const FavoritesContext = createContext({
	favorites: [] as FavoritesType[],
	addFavorite: (favorite: FavoritesType) => {},
	removeFavorite: (favoriteId: string) => {},
});

export default function FavoritesContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [favorites, setFavorites] = useState<FavoritesType[]>([]);

	const addFavorite = (favorite: FavoritesType) => {
		setFavorites(currentFavs => [...currentFavs, favorite]);
	};

	const removeFavorite = (favoriteId: string) => {
		setFavorites(currentFavs => currentFavs.filter(fav => fav.id !== favoriteId));
	};

	const value = {
		favorites,
		addFavorite,
		removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}
