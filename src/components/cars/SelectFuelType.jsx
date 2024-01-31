import { Select } from 'antd';

export const SelectFuelType = ({ value, handleChange }) => {
  const options = [
    { label: 'LPG', value: 'LPG' },
    { label: 'Gas', value: 'Gas' },
    { label: 'Diesel', value: 'Diesel' },
  ];

  const onChange = (value) => {
    handleChange(value);
  };

  return (
    <div className='selectCarsWrapper'>
      <label>Fuel Type</label>
      <Select
        value={value}
        onChange={onChange}
        placeholder='Select a fuel type...'
        options={options}
      />
    </div>
  );
};
