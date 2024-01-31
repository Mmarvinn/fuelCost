import { Input } from 'antd';
import {
  getLocalStorageTrips,
  setLocalStorageTrips,
} from '../../services/localStorage';
import { useEffect, useState } from 'react';
import { SelectTrips } from './SelectTrips';
import { validateEmptyInputs } from '../../services/validation';
import { useContext } from 'react';
import { ReactContext } from '../../services/ReactContextProvider';

export const AddMileageIntoTrip = () => {
  const { seed, reset } = useContext(ReactContext);
  const [trips, setTrips] = useState([]);
  const [values, setValues] = useState({
    selectedTrip: null,
    mileage: null,
  });
  const [validationError, setValidationError] = useState({
    error: false,
    message: '',
  });

  const handleChange = (props) => (event) => {
    if (props === 'selectedTrip') {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.mileage < 0) {
      return setValidationError({
        error: true,
        message: 'Do not use negative value',
      });
    }

    const validation = validateEmptyInputs(values);
    if (!validation) {
      return setValidationError({
        error: true,
        message: 'Please fill all of fields',
      });
    }

    const selected = trips.find(
      (trip) => trip.tripName === values.selectedTrip
    );
    const newTrips = trips.map((trip) => {
      if (trip.id === selected.id) {
        const selectedMileage = selected.mileage ?? 0;
        return {
          ...trip,
          mileage: Number(selectedMileage) + Number(values.mileage),
        };
      }
      return trip;
    });
    setLocalStorageTrips(newTrips);

    setValidationError({ error: false, message: '' });
    setValues({ ...values, mileage: null });

    reset();
  };

  useEffect(() => {
    const localStorage = getLocalStorageTrips();
    if (localStorage) {
      setTrips(localStorage);
    }
    setValues({ ...values, selectedTrip: null });
  }, [seed]);

  return (
    <div className='addMileageWrapper'>
      <h3 className='addMileageWrapper__title'>Add mileage into Trip</h3>

      <form
        name='addMileage'
        onSubmit={handleSubmit}
        className='addMileageWrapper__form'
      >
        <div className='addMileage__containersWrapper'>
          <div className='containersWrapper__container'>
            <label>Mileage (km)</label>
            <Input
              aria-label='Add mileage into Trip'
              placeholder='Mileage'
              size='middle'
              // status={validateUserEmail ? 'error' : ''}
              name='mileage'
              type='number'
              value={values.mileage}
              onChange={handleChange('mileage')}
              // onKeyUp={() => {
              //   setValidateUserEmail(validateEmail(values.email));
              // }}
            />
          </div>

          <SelectTrips
            setTrip={handleChange('selectedTrip')}
            value={values.selectedTrip}
            trips={trips}
          />
        </div>

        <input
          type='submit'
          value='Add'
          className='outlinedBtn outlinedBtn_bg40'
        />
      </form>

      {validationError.error && (
        <p className='errorMessage'>{validationError.message}</p>
      )}
    </div>
  );
};
