import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/List';
import Subtitle from '../components/Subtitle';

function MealsDetailsScreen({ route }){
    const mealId = route.params.mealId;
    console.log('mealId = ', mealId);
    const selectedMeal = MEALS.find((meal)=> meal.id===mealId)
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