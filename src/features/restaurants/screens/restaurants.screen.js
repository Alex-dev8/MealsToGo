import React from 'react';
import {SafeArea} from '../components/utilities/safe-area.component';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import {Spacer} from '../components/spacer/spacer.component';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

// .attrs allows us to access the attributes of the styled FlatList and pass props.
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{}, {}, {}, {}, {}, {}]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={item => item.name}
    />
  </SafeArea>
);
