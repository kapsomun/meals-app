import { FC } from 'react';
import { FlatList, StatusBar } from 'react-native';

import CategoriesItem from '@/components/shared/CategoriesItem/CategoriesItem';

import styles from './categories.styles';
import { CATEGORIES } from '@/data/data';

const Categories: FC = () => {
	return (
		<>
			<FlatList
				style={styles.container}
				data={CATEGORIES}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <CategoriesItem {...item} />}
				numColumns={2}
			/>
			<StatusBar barStyle='light-content' backgroundColor='transparent' />
		</>
	);
};

export default Categories;
