import { NavigationProp, useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

import styles from './categories-item.styles';

type CategoriesItemProps = {
	title: string;
	color: string;
	id: string;
};

const CategoriesItem: FC<CategoriesItemProps> = ({ title, color, id }) => {
	const navigation = useNavigation<NavigationProp<TypeRootStackParamList>>();

	const handlePress = (id: string) => {
		navigation.navigate('MealsOverview', { categoryId : id });
	};
	return (
		<View style={[styles.categoryItemContainer, { backgroundColor: color }]}>
			<TouchableOpacity onPress={() => handlePress(id)} style={styles.button}>
				<View style={styles.innerContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default CategoriesItem;
