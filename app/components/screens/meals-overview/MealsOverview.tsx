import { MEALS } from '@/data/data';
import { useRoute } from '@react-navigation/core';
import { FC } from 'react';
import { FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import MealsOverviewItem from '@/components/shared/MealsOverviewItem/MealsOverviewItem';

type MealsOverviewRouteProp = RouteProp<TypeRootStackParamList, 'MealsOverview'>;

const MealsOverview: FC = () => {
  const route = useRoute<MealsOverviewRouteProp>();
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return (
    <SafeAreaView>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => <MealsOverviewItem {...item}/>}
      />
    </SafeAreaView>
  );
}

export default MealsOverview;
