import { Modal } from 'antd';
import { getLocalStorageCars } from '../../services/localStorage';
import { useContext, useEffect, useState } from 'react';
import { ReactContext } from '../../services/ReactContextProvider';

export const TripInfoModal = ({
  trip,
  isModalOpen,
  closeModal,
  fuelPrices,
}) => {
  const { seed } = useContext(ReactContext);
  const [tripCar, setTripCar] = useState('');
  const [milage, setMilage] = useState(0);
  const [tripCost, setTripCost] = useState(0);

  useEffect(() => {
    const cars = getLocalStorageCars();
    if (cars) {
      const tripCar = cars.find((car) => car.id === trip.tripCar);
      setTripCar(tripCar);
    }
  }, [seed]);

  useEffect(() => {
    const milageOnTrip = trip.mileage ?? 0;
    setMilage(milageOnTrip);
  }, [trip]);

  useEffect(() => {
    const fuelType = tripCar.fuelType?.toLowerCase();
    const consumption = Number(tripCar.consumption);
    const fuelPrice = fuelPrices[fuelType];
    const valuePerKilometr = Number(consumption / 100);
    const mileage = trip.mileage;

    const cost = Math.ceil(mileage * valuePerKilometr * fuelPrice);

    if (isNaN(cost)) {
      setTripCost(0);
    } else {
      setTripCost(cost);
    }
  }, [isModalOpen]);

  return (
    <Modal
      className='createNewTripModal'
      width={350}
      footer={false}
      open={isModalOpen}
      onCancel={closeModal}
      zIndex={1}
      aria-modal='true'
      aria-label='modal trip info'
      title={<h4 className='createNewTripModal__title'>Trip info</h4>}
    >
      <div className='createNewTripModal__tripInfo'>
        <div className='tripInfo__block'>
          <p>Trip name:</p>
          <p>{trip.tripName}</p>
        </div>
        <div className='tripInfo__block'>
          <p>Trip car:</p>
          <p>{`${tripCar.brand} ${tripCar.model}`}</p>
        </div>
        <div className='tripInfo__block'>
          <p>Mileage:</p>
          <p>{`${milage} km`}</p>
        </div>
        <div className='tripInfo__block'>
          <p>Trip cost:</p>
          <p>{`${tripCost} UAH`}</p>
        </div>
      </div>
    </Modal>
  );
};
