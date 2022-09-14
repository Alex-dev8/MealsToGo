import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import {Spacer} from '../components/spacer/spacer.component';
import {theme} from '../../../infrastructure/theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // The status bar is only for Android, so we need to use this conditional for iOS not to crash: if StatusBar.currentHeight == true, then set the margin-top to that height.
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[{}, {}, {}, {}, {}, {}]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={item => item.name}
      contentContainerStyle={{padding: 16}}
    />
  </SafeArea>
);
