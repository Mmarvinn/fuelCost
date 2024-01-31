import { Input, Modal } from 'antd';
import { useState } from 'react';
import {
  getLocalStorageCars,
  setLocalStorageCars,
} from '../../services/localStorage';
import { validateEmptyInputs } from '../../services/validation';
import { SelectFuelType } from './SelectFuelType';

export const NewCarModal = ({ isModalOpen, closeModal, reset }) => {
  const [values, setValues] = useState({
    id: (Math.random() * 900000).toFixed(0),
    brand: null,
    model: null,
    year: null,
    engine: null,
    consumption: null,
    fuelType: null,
  });
  const [validationError, setValidationError] = useState(false);

  const handleChange = (props) => (event) => {
    if (props === 'fuelType') {
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
      brand: null,
      model: null,
      year: null,
      engine: null,
      consumption: null,
      fuelType: null,
    });
    closeModal();
    setValidationError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateEmptyInputs(values);
    if (validation) {
      const cars = getLocalStorageCars() ?? [];
      setLocalStorageCars([...cars, values]);
      setValidationError(false);
      handleClose();
      reset();
    } else {
      setValidationError(true);
    }
  };

  return (
    <Modal
      className='createNewCarModal'
      width={350}
      footer={false}
      open={isModalOpen}
      onCancel={handleClose}
      zIndex={1}
      aria-modal='true'
      aria-label='modal create new car'
      title={<h4 className='createNewCarModal__title'>Create Car</h4>}
    >
      <form onSubmit={handleSubmit} name='newCarForm'>
        <label>Brand</label>
        <Input
          aria-label='write your car brand'
          placeholder='Car brand'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='brand'
          type='text'
          value={values.brand}
          onChange={handleChange('brand')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <label>Model</label>
        <Input
          aria-label='write your car model'
          placeholder='Car model'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='model'
          type='text'
          value={values.model}
          onChange={handleChange('model')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <label>Year</label>
        <Input
          aria-label='write your car year'
          placeholder='Car year'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='year'
          type='number'
          value={values.year}
          onChange={handleChange('year')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <label>Engine</label>
        <Input
          addonAfter={
            <span>
              cm<sup>3</sup>
            </span>
          }
          aria-label='write your car engine'
          placeholder='Car engine'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='engine'
          type='number'
          value={values.engine}
          onChange={handleChange('engine')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <label>Consumption</label>
        <Input
          addonAfter='L/100km'
          aria-label='write your car consumption'
          placeholder='Car consumption'
          size='middle'
          // status={validateUserEmail ? 'error' : ''}
          name='consumption'
          type='number'
          value={values.consumption}
          onChange={handleChange('consumption')}
          // onKeyUp={() => {
          //   setValidateUserEmail(validateEmail(values.email));
          // }}
        />

        <SelectFuelType
          value={values.fuelType}
          handleChange={handleChange('fuelType')}
        />

        <input
          className='outlinedBtn'
          aria-roledescription='submit button'
          type='submit'
          value='Create'
          disabled={false}
        />
      </form>

      {validationError && (
        <p className='errorMessage'>Please fill all of fields</p>
      )}
    </Modal>
  );
};
