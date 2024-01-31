import { useContext, useEffect, useState } from 'react';
import {
  getLocalStorageFuelPrices,
  getLocalStorageTrips,
} from '../../services/localStorage';
import { CreateNewTrip } from './CreateNewTrip';
import { TripInList } from './TripInList';
import { ReactContext } from '../../services/ReactContextProvider';

export const ListOfTrips = () => {
  const { seed, reset } = useContext(ReactContext);
  const [trips, setTrips] = useState([]);
  const [fuelPrices, setFuelPrices] = useState({});

  useEffect(() => {
    const localStorage = getLocalStorageTrips();
    if (localStorage) {
      setTrips(localStorage);
    }

    const storageFuelPrices = getLocalStorageFuelPrices();
    if (storageFuelPrices) {
      setFuelPrices(storageFuelPrices);
    }
  }, [seed]);

  return (
    <div className='listOfTripsWrapper'>
      <h3 className='listOfTripsWrapper__title'>List of Your Trips</h3>
      <CreateNewTrip />
      {trips.length !== 0 ? (
        <div className='listOfTrips'>
          {trips.map((trip) => {
            return (
              <TripInList
                key={trip.id}
                trip={trip}
                reset={reset}
                fuelPrices={fuelPrices}
              />
            );
          })}
        </div>
      ) : (
        <h3 className='listOfTripsWrapper__noTripsTitle'>
          You have no created trips
        </h3>
      )}
    </div>
  );
};
