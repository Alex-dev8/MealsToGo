import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import {LocationContext} from '../location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

// This is the wrapper we use to wrap App.js in the context
export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  // With this function we call the functions we created inside restaurants.service. We set the state of the app to 'isLoading' and we set a timeout in case there's a problem. The timeout is 2000ms. Once we get the restaurants, we set the restaurants into the restaurants empty array we created above, and set loading to false. We also catch any errors, in which case we set loading to false and save the error in the error we created before.
  const retrieveRestaurants = loc => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  // When RestaurantsContextProvider mounts, useEffect will get called.
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    // The three pieces of state that I want to pass are restaurants, isLoading and if there are any errors.
    <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
