import React, {useContext} from 'react';
import {FavouritesContext} from '../../../../services/favourites/favourites.context';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

// We pull in the favourites and 2 methods from FavouritesContext.
export const Favourite = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }>
      <SFSymbol
        name={isFavourite ? 'heart.fill' : 'heart'}
        color={isFavourite ? 'red' : 'gray'}
        size={25}
      />
    </FavouriteButton>
  );
};
