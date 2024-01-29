import { useEffect, useState } from 'react';
import { getLocalStorageTrips } from '../../services/localStorage';
import { CreateNewTrip } from './CreateNewTrip';

export const ListOfTrips = () => {
  const [trips, setTrips] = useState([]);
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  useEffect(() => {
    const localStorage = getLocalStorageTrips();
    if (localStorage) {
      setTrips(localStorage);
    }
  }, [seed]);

  return (
    <div className='listOfTripsWrapper'>
      <h3 className='listOfTripsWrapper__title'>List of Your Trips</h3>
      <CreateNewTrip reset={reset} />
      {/* {trips.length !== 0 ? (
        <div className='listOfTrips'>
          {trips.map((trip) => {
            return <CarInList key={trip.id} trip={trip} reset={reset} />;
          })}
        </div>
      ) : (
        <h3 className='listOfTripsWrapper__noTripsTitle'>
          You have no created trips
        </h3>
      )} */}
    </div>
  );
};
