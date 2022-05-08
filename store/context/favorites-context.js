import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }){
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavortieMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds)=>
            currentFavIds.filter((mealId)=> mealId !== id)
        )
    }
}

export default FavoritesContextProvider;