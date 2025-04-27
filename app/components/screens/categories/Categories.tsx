import { FC } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoriesItem from '@/components/shared/CategoriesItem/CategoriesItem';


import styles from './categories.styles';
import { CATEGORIES } from '@/data/data';

const Categories: FC = () => {
	
	return (
		<SafeAreaView style={styles.safeAreaView}>
			<FlatList
				style={styles.container}
				data={CATEGORIES}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<CategoriesItem  {...item} />
				)}
				numColumns={2}
			/>
			<StatusBar barStyle='light-content' backgroundColor='transparent' />
		</SafeAreaView>
	);
};

export default Categories;
