import { useEffect, useState } from 'react';
import { Select } from 'antd';

export const SelectCars = ({ value, cars, handleChange }) => {
  const [options, setOptions] = useState([]);

  const onChange = (value) => {
    handleChange(value);
  };

  useEffect(() => {
    const opt = cars.map((car) => {
      return { label: `${car.brand} ${car.model}`, value: car.id };
    });
    setOptions(opt);
  }, [cars]);

  return (
    <div className='selectCarsWrapper'>
      <label>Trip car</label>
      <Select
        value={value}
        onChange={onChange}
        placeholder='Select a car...'
        options={options}
      />
    </div>
  );
};
