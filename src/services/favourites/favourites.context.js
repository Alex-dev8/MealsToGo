import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  // If the placeId matches, do not add
  const remove = restaurant => {
    const newFavourites = favourites.filter(
      x => x.placeId !== restaurant.placeId,
    );
  };

  // The values that are provided externally
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
