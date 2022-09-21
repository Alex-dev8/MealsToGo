import React, {useState} from 'react';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../components/utilities/safe-area.component';
import {List} from 'react-native-paper';
import {Spacer} from '../components/spacer/spacer.component';
import {ScrollView} from 'react-native';

export const RestaurantDetailScreen = ({route, navigation}) => {
  const {restaurant} = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {/* <Spacer position="bottom" size="large" /> */}
      <List.Section title="Menu">
        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={props => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            <List.Item title="Eggs" />
            <List.Item title="Sandwich" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={props => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}>
            <List.Item title="Pasta" />
            <List.Item title="Rice" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={props => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}>
            <List.Item title="Pizza" />
            <List.Item title="Soup" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={props => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}>
            <List.Item title="Water" />
            <List.Item title="Wine" />
          </List.Accordion>
        </ScrollView>
      </List.Section>
    </SafeArea>
  );
};
