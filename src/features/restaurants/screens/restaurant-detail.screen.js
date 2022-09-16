import React from 'react';
import {View} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../components/utilities/safe-area.component';

export const RestaurantDetailScreen = ({route, navigation}) => {
  const {restaurant} = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
