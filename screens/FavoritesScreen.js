import { View, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
//import {useDispatch, useSelector} from 'react-redux';

function FavoritesScreen() {
    const favoriteMealsData = useSelector((state)=>state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsData.includes(meal.id));

    if ( favoriteMeals.length ===0){
        return <View style= {styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }
    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})