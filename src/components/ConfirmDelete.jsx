import { Modal } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ReactContext } from '../services/ReactContextProvider';

export const ConfirmDelete = ({
  isModalOpen,
  closeModal,
  trips,
  car,
  onOk,
}) => {
  const filteredTrips = trips.filter((item) => item.tripCar === car.id);

  return (
    <Modal
      className='confirmDeleteModal'
      width={350}
      footer={false}
      open={isModalOpen}
      onCancel={closeModal}
      zIndex={1}
      aria-modal='true'
      aria-label='modal confirm delete'
      title={<h4 className='confirmDeleteModal__title'>Confirm delete</h4>}
    >
      <div className='confirmDeleteModal__textWrapper'>
        <p>
          This car{' '}
          <span>
            <b>{`${car.brand} ${car.model} (${car.year})`}</b>
          </span>{' '}
          already use in this trips:
        </p>
        <ol className='textWrapper__ol'>
          {filteredTrips.map((item) => (
            <li key={item.id}>
              <b>{item.tripName}</b>
            </li>
          ))}
        </ol>
        <p>If you delete this vehicle, these trips will also be deleted.</p>
        <p>Delete car ?</p>
      </div>
      <div className='confirmDeleteModal__btnsWrapper'>
        <button className='outlinedBtn outlinedBtn_bg40' onClick={onOk}>
          OK
        </button>
        <button className='outlinedBtn outlinedBtn_bg40' onClick={closeModal}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};
