import React from 'react';
import { useParams } from 'react-router-dom';

import PLaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the Most famous sky scraers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u1',
  },
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the Most famous sky scraers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId; //Gives access to the userId thats encoded in the URL
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PLaceList items={loadedPlaces} />;
};

export default UserPlaces;
