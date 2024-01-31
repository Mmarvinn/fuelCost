import { Input, Modal } from 'antd';
import { useContext, useEffect, useState } from 'react';
import {
  getLocalStorageCars,
  getLocalStorageTrips,
  setLocalStorageTrips,
} from '../../services/localStorage';
import { validateEmptyInputs } from '../../services/validation';
import { SelectCars } from './SelectCars';
import { ReactContext } from '../../services/ReactContextProvider';

export const NewTripModal = ({ isModalOpen, closeModal }) => {
  const { reset } = useContext(ReactContext);
  const cars = getLocalStorageCars();
  const [values, setValues] = useState({
    id: (Math.random() * 900000).toFixed(0),
    tripName: null,
    tripCar: null,
    mileage: null,
  });
  const [validationError, setValidationError] = useState({
    error: false,
    message: '',
  });

  const handleChange = (props) => (event) => {
    if (props === 'tripCar') {
      setValues((prevState) => {
        if (event === '') {
          return { ...prevState, [props]: null };
        }
        return { ...prevState, [props]: event };
      });
    } else {
      setValues((prevState) => {
        if (event.target.value === '') {
          return { ...prevState, [props]: null };
        }
        return { ...prevState, [props]: event.target.value };
      });
    }
  };

  const handleClose = () => {
    setValues({
      id: (Math.random() * 900000).toFixed(0),
      tripName: null,
      tripCar: null,
      mileage: null,
    });
    closeModal();
    setValidationError({ error: false, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mileage, ...dataForValidation } = values;
    const validation = validateEmptyInputs(dataForValidation);
    if (validation) {
      const trips = getLocalStorageTrips() ?? [];
      const nameAlreadyInUse = trips.find(
        (trip) => trip.tripName === values.tripName
      );

      if (nameAlreadyInUse) {
        return setValidationError({
          error: true,
          message: 'This trip name is already in use',
        });
      }

      setLocalStorageTrips([...trips, values]);
      setValidationError({ error: false, message: '' });
      handleClose();
      reset();
    } else {
      setValidationError({ error: true, message: 'Please fill all of fields' });
    }
  };

  return (
    <Modal
      className='createNewTripModal'
      width={350}
      footer={false}
      open={isModalOpen}
      onCancel={handleClose}
      zIndex={1}
      aria-modal='true'
      aria-label='modal create new trip'
      title={<h4 className='createNewTripModal__title'>Create Trip</h4>}
    >
      <form onSubmit={handleSubmit} name='newTripForm'>
        <label>Trip name</label>
        <Input
          aria-label='write your Trip name'
          placeholder='Trip name'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='Trip name'
          type='text'
          value={values.tripName}
          onChange={handleChange('tripName')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <SelectCars
          cars={cars}
          handleChange={handleChange('tripCar')}
          value={values.tripCar}
        />

        <input
          className='outlinedBtn'
          aria-roledescription='submit button'
          type='submit'
          value='Create'
          disabled={false}
        />
      </form>

      {validationError.error && (
        <p className='errorMessage'>{validationError.message}</p>
      )}
    </Modal>
  );
};
