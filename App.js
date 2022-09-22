import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLLnFBt2ZXL7Vydh4lQj8iuhdZbnQOuIo',
  authDomain: 'mealstogo-2d2f7.firebaseapp.com',
  projectId: 'mealstogo-2d2f7',
  storageBucket: 'mealstogo-2d2f7.appspot.com',
  messagingSenderId: '755904628437',
  appId: '1:755904628437:web:7d09b93cece9727deac45c',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword('email@email.com', 'test123')
        .then(user => {
          setIsAuthenticated(true);
        })
        .catch(e => {});
    }, 2000);
  }, []);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
