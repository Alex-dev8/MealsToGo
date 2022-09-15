import {mockImages, mocks} from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location) => {
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
    // Get random mock images
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      address: restaurant.vicinity,
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
