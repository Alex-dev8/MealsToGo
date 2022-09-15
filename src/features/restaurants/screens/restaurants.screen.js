import React, {useContext} from 'react';
import {SafeArea} from '../components/utilities/safe-area.component';
import {Searchbar, ActivityIndicator, Colors} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import {FlatList, View} from 'react-native';
import {Spacer} from '../components/spacer/spacer.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute,
  top: 50%,
  left: 50%,
`;

// .attrs allows us to access the attributes of the styled FlatList and pass props.
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  // We destructure the RestaurantsContext to get the loading state, any errors and, of course, the restaurants.
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
