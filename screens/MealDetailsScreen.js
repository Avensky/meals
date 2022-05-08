import { useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native'
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/List';
import Subtitle from '../components/Subtitle';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealsDetailsScreen({ route, navigation }){

    const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids)
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)

    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler(){
        if (mealIsFavorite) {
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}))
        } else {
            //favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}))
        }
    }

    function headerButtonPressHandler() {
        console.log('Pressed!');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton 
                    icon={ mealIsFavorite ? 'star' : 'star-outline'}
                    color='white'
                    onPress={changeFavoriteStatusHandler} />
            }
        })
    },[navigation, changeFavoriteStatusHandler]);

    return <ScrollView style={Styles.rootContainer}>
        <Image style = {Styles.image} source={{uri: selectedMeal.imageUrl}}
        />
        <Text style={Styles.title}> {selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={Styles.detailsText}
            />
        <View style={Styles.listOuterContainer}>
            <View style={Styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle >Steps</Subtitle>
                <List data={selectedMeal.steps} />                
            </View>
        </View>
    </ScrollView>
}

export default MealsDetailsScreen

const Styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    },
    image: {
        width:'100%',
        height:350
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailsText: {
        color: 'white'
    },
    subtitle: {
        color:'white',
        fontSize: 18,

    }
})