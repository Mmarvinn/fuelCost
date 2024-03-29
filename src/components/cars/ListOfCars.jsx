import { useContext, useEffect, useState } from 'react';
import { CarInList } from './CarInList';
import { getLocalStorageCars } from '../../services/localStorage';
import { CreateNewCar } from './CreateNewCar';
import { ReactContext } from '../../services/ReactContextProvider';

export const ListOfCars = () => {
  const [cars, setCars] = useState([]);
  const { seed, reset } = useContext(ReactContext);

  useEffect(() => {
    const localStorage = getLocalStorageCars();
    if (localStorage) {
      setCars(localStorage);
    }
  }, [seed]);

  return (
    <div className='listOfCarsWrapper'>
      <h3 className='listOfCarsWrapper__title'>List of Your Cars</h3>
      <CreateNewCar reset={reset} />
      {cars.length !== 0 ? (
        <div className='listOfCars'>
          {cars.map((car) => {
            return <CarInList key={car.id} car={car} reset={reset} />;
          })}
        </div>
      ) : (
        <h3 className='listOfCarsWrapper__noCarsTitle'>
          You have no created cars
        </h3>
      )}
    </div>
  );
};
