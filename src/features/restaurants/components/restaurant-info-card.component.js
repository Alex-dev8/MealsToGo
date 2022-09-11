import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-native-paper';

// We must use template `` for this to work
const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const CoverImage = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

// We need to set restaurant as an empty object by writing = {} so that we can then call the individual properties
export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.iberdrola.com/documents/20125/39904/real_food_746x419.jpg/0c9185fa-b2dd-e1a6-602c-bca55f68e54e?t=1626673209445',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <CoverImage key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
