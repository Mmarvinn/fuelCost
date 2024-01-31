import { useContext, useEffect, useState } from 'react';
import { CarInfoModal } from './CarInfoModal';
import { DeleteOutlined } from '@ant-design/icons';
import {
  getLocalStorageCars,
  getLocalStorageTrips,
  setLocalStorageCars,
  setLocalStorageTrips,
} from '../../services/localStorage';
import { ReactContext } from '../../services/ReactContextProvider';
import { ConfirmDelete } from '../ConfirmDelete';

export const CarInList = ({ car, reset }) => {
  const { seed } = useContext(ReactContext);
  const [trips, setTrips] = useState([]);
  const [cars, setCars] = useState([]);
  const [isCarInfoModalOpen, setCarInfoModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);

  const confirmDeleteCarAndTrip = () => {
    const filteredCars = cars.filter((item) => item.id !== car.id);
    setLocalStorageCars(filteredCars);

    const filteredTrips = trips.filter((item) => item.tripCar !== car.id);
    setLocalStorageTrips(filteredTrips);
    reset();
  };

  const handleDelete = () => {
    for (let trip of trips) {
      if (trip.tripCar === car.id) {
        return setConfirmDeleteModalOpen(true);
      }
    }

    const filteredCars = cars.filter((item) => item.id !== car.id);
    setLocalStorageCars(filteredCars);
    reset();
  };

  useEffect(() => {
    const localStorageTrips = getLocalStorageTrips();
    if (localStorageTrips) {
      setTrips(localStorageTrips);
    }

    const localStorageCars = getLocalStorageCars();
    if (localStorageCars) {
      setCars(localStorageCars);
    }
  }, [seed]);

  return (
    <>
      <div className='listOfCars__carInListWrapper'>
        <p className='carInList' onClick={() => setCarInfoModalOpen(true)}>
          <span>{car.brand} </span>
          <span>{car.model}</span>
          <span>{` (${car.year})`}</span>
        </p>
        <DeleteOutlined
          className='carInList__deleteIcon'
          onClick={handleDelete}
        />
      </div>
      <CarInfoModal
        car={car}
        isModalOpen={isCarInfoModalOpen}
        closeModal={() => setCarInfoModalOpen(false)}
      />
      <ConfirmDelete
        isModalOpen={isConfirmDeleteModalOpen}
        closeModal={() => setConfirmDeleteModalOpen(false)}
        trips={trips}
        car={car}
        onOk={confirmDeleteCarAndTrip}
      />
    </>
  );
};
