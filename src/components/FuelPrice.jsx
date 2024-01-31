import { Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ReactContext } from '../services/ReactContextProvider';
import { validateNegativeValues } from '../services/validation';
import {
  getLocalStorageFuelPrices,
  setLocalStorageFuelPrices,
} from '../services/localStorage';

export const FuelPrice = () => {
  const { seed, reset } = useContext(ReactContext);
  const [values, setValues] = useState({
    lpg: 0,
    gas: 0,
    diesel: 0,
  });
  const [validationError, setValidationError] = useState({
    error: false,
    message: '',
  });

  const handleChange = (props) => (event) => {
    setValues((prevState) => {
      if (event.target.value === '') {
        return { ...prevState, [props]: 0 };
      }
      return { ...prevState, [props]: Number(event.target.value) };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateNegativeValues(values);
    if (!validation) {
      return setValidationError({
        error: true,
        message: 'Do not use negative value',
      });
    }

    setLocalStorageFuelPrices(values);
    setValidationError({ error: false, message: '' });
    reset();
  };

  useEffect(() => {
    const prices = getLocalStorageFuelPrices();
    if (prices) {
      setValues(prices);
    }
  }, [seed]);

  return (
    <div className='fuelPricesWrapper'>
      <h4 className='fuelPrice__title'>Fuel price:</h4>

      <form
        className='fuelPrice__form'
        name='fuelPriceForm'
        onSubmit={handleSubmit}
      >
        <div className='fuelPrice__containersWrapper'>
          <div className='containersWrapper__container'>
            <label>LPG</label>
            <Input
              aria-label='Change LPG price'
              placeholder='LPG'
              size='middle'
              // status={validateUserEmail ? 'error' : ''}
              name='lpg'
              type='number'
              value={values.lpg}
              onChange={handleChange('lpg')}
              // onKeyUp={() => {
              //   setValidateUserEmail(validateEmail(values.email));
              // }}
            />
          </div>
          <div className='containersWrapper__container'>
            <label>Gas</label>
            <Input
              aria-label='Change Gas price'
              placeholder='Gas'
              size='middle'
              // status={validateUserEmail ? 'error' : ''}
              name='gas'
              type='number'
              value={values.gas}
              onChange={handleChange('gas')}
              // onKeyUp={() => {
              //   setValidateUserEmail(validateEmail(values.email));
              // }}
            />
          </div>
          <div className='containersWrapper__container'>
            <label>Diesel</label>
            <Input
              aria-label='Change Diesel price'
              placeholder='Diesel'
              size='middle'
              // status={validateUserEmail ? 'error' : ''}
              name='diesel'
              type='number'
              value={values.diesel}
              onChange={handleChange('diesel')}
              // onKeyUp={() => {
              //   setValidateUserEmail(validateEmail(values.email));
              // }}
            />
          </div>
        </div>

        <input
          type='submit'
          value='Update'
          className='outlinedBtn outlinedBtn_bg40'
        />
      </form>

      {validationError.error && (
        <p className='errorMessage'>{validationError.message}</p>
      )}
    </div>
  );
};
