import { useState } from 'react';
import { CarInfoModal } from './CarInfoModal';
import { DeleteOutlined } from '@ant-design/icons';
import {
  getLocalStorageCars,
  setLocalStorageCars,
} from '../../services/localStorage';

export const CarInList = ({ car, reset }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    const cars = getLocalStorageCars();
    const filteredCars = cars.filter((item) => item.id !== car.id);
    setLocalStorageCars(filteredCars);
    reset();
  };

  return (
    <>
      <div className='listOfCars__carInListWrapper'>
        <p className='carInList' onClick={() => setModalOpen(true)}>
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
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
};
