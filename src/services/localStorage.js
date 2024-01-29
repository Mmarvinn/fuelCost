const CARS = 'Cars';
const TRIPS = 'Trips';

// cars
export const getLocalStorageCars = () => {
  const data = localStorage.getItem(CARS);
  return JSON.parse(data);
};

export const setLocalStorageCars = (data) => {
  const json = JSON.stringify(data);
  localStorage.setItem(CARS, json);
};

export const deleteLocalStorageCars = () => {
  localStorage.removeItem(CARS);
};

// trips
export const getLocalStorageTrips = () => {
  const data = localStorage.getItem(TRIPS);
  return JSON.parse(data);
};

export const setLocalStorageTrips = (data) => {
  const json = JSON.stringify(data);
  localStorage.setItem(TRIPS, json);
};

export const deleteLocalStorageTrips = () => {
  localStorage.removeItem(TRIPS);
};
