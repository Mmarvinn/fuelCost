import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import {
  getLocalStorageTrips,
  setLocalStorageTrips,
} from '../../services/localStorage';
import { TripInfoModal } from './TripInfoModal';

export const TripInList = ({ trip, reset, fuelPrices }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    const trips = getLocalStorageTrips();
    const filteredTrips = trips.filter((item) => item.id !== trip.id);
    setLocalStorageTrips(filteredTrips);
    reset();
  };

  return (
    <>
      <div className='listOfTrips__tripInListWrapper'>
        <p className='tripInList' onClick={() => setModalOpen(true)}>
          {trip.tripName}
        </p>
        <DeleteOutlined
          className='tripInList__deleteIcon'
          onClick={handleDelete}
        />
      </div>
      <TripInfoModal
        trip={trip}
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        fuelPrices={fuelPrices}
      />
    </>
  );
};
