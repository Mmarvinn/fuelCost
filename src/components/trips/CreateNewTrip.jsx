import { useState } from 'react';
// import { NewCarModal } from './NewCarModal';

export const CreateNewTrip = ({ reset }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='listOfCarsWrapper__createNewCar'>
      <button
        className='outlinedBtn outlinedBtn_bg40'
        onClick={() => setModalOpen(true)}
      >
        Create new trip
      </button>
      {/* <NewCarModal
        reset={reset}
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      /> */}
    </div>
  );
};
