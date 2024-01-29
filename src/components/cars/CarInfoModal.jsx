import { Modal } from 'antd';

export const CarInfoModal = ({ car, isModalOpen, closeModal }) => {
  return (
    <Modal
      className='createNewCarModal'
      width={350}
      footer={false}
      open={isModalOpen}
      onCancel={closeModal}
      zIndex={1}
      aria-modal='true'
      aria-label='modal create new car'
      title={<h4 className='createNewCarModal__title'>Car Characteristics</h4>}
    >
      <div className='createNewCarModal__carInfo'>
        <div className='carInfo__block'>
          <p>Brand:</p>
          <p>Model:</p>
          <p>Year:</p>
          <p>Engine:</p>
          <p>Consumption:</p>
        </div>
        <div className='carInfo__block carInfo_currentModel'>
          <p>{car.brand}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>
            {car.engine}
            <span> cm3</span>
          </p>
          <p>
            {car.consumption}
            <span> L/100km</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};
