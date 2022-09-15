import {mocks} from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

// The result has an object called 'results', which is an array. We can deconstruct the object result by using { } and calling results inside there. We do {results = []} to default it to an empty array.
// results.map iterates through every result, in this case each restaurant. That's why we write 'restaurant' in the parenthesis. The syntax '...restaurant' returns the original restaurant object, to which we add two properties: isClosedTemporarily which will check if the business status is set to 'CLOSED_TEMPORARILY', and isOpenNow checks opening_hours, and then goes inside that object to check if 'open_now' is true or false, and sets that value to isOpenNow.
export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then(transformedResponse => {
    console.log(transformedResponse);
  })
  .catch(err => {
    console.log('error');
  });