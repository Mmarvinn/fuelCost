import { Select } from 'antd';
import { useEffect, useState } from 'react';

export const SelectTrips = ({ value, trips, setTrip }) => {
  const [options, setOptions] = useState([]);

  const onChange = (value) => {
    setTrip(value);
  };

  useEffect(() => {
    const tripsLabels = trips.map((trip) => {
      return { value: trip.tripName };
    });
    setOptions(tripsLabels);
  }, [trips]);

  return (
    <div className='containersWrapper__container'>
      <label>Choose a Trip</label>
      <Select
        value={value}
        onChange={onChange}
        placeholder='Select a trip...'
        options={options}
      />
    </div>
  );
};
