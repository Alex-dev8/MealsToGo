import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-native-paper';
import {Text, Image, View} from 'react-native';
import {Spacer} from './spacer/spacer.component';

// We must use template `` for this to work
const Title = styled.Text`
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.title};
`;

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const CoverImage = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled.Text`
  flex-direction: row;
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
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CoverImage key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((val, index) => (
              <Text key={index}>⭐️</Text>
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{color: 'red'}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {!isOpenNow && <Text>🔜</Text>}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{width: 15, height: 15}} source={icon} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
