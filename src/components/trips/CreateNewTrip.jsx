import { useState } from 'react';
import { NewTripModal } from './NewTripModal';

export const CreateNewTrip = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='listOfTripsWrapper__createNewTrip'>
      <button
        className='outlinedBtn outlinedBtn_bg40'
        onClick={() => setModalOpen(true)}
      >
        Create new trip
      </button>
      <NewTripModal
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
};
