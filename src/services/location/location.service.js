import camelize from 'camelize';
import {locations} from './location.mock';

export const locationRequest = searchTerm => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('not found');
    }
    resolve(locationMock);
  });
};

// We deconstruct result.results to get the geometry object contained inside
export const locationTransform = result => {
  const formattedResponse = camelize(result);
  const {geometry = {}} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;

  return {lat, lng};
};
