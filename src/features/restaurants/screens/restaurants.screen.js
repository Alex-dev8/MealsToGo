import React, {useContext} from 'react';
import {SafeArea} from '../components/utilities/safe-area.component';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import {FlatList, TouchableOpacity} from 'react-native';
import {Spacer} from '../components/spacer/spacer.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

// const LoadingContainer = styled.View`
//   position: absolute,
//   top: 50%,
//   left: 50%,
// `;

// .attrs allows us to access the attributes of the styled FlatList and pass props.
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

// Prop 'navigation' is passed from stack.Screen. We can use it to push or navigate to another screen.
export const RestaurantsScreen = ({navigation}) => {
  // We destructure the RestaurantsContext to get the loading state, any errors and, of course, the restaurants.
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {/* {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )} */}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }>
              {/* <Spacer position="bottom" size="large"> */}
                <RestaurantInfoCard restaurant={item} />
              {/* </Spacer> */}
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
