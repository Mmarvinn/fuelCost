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
      aria-label='modal car info'
      title={<h4 className='createNewCarModal__title'>Car Characteristics</h4>}
    >
      <div className='createNewCarModal__carInfo'>
        <div className='carInfo__block'>
          <p>Brand:</p>
          <p>{car.brand}</p>
        </div>

        <div className='carInfo__block'>
          <p>Model:</p>
          <p>{car.model}</p>
        </div>

        <div className='carInfo__block'>
          <p>Year:</p>
          <p>{car.year}</p>
        </div>

        <div className='carInfo__block'>
          <p>Engine:</p>
          <p>
            {car.engine}
            <span> cm3</span>
          </p>
        </div>

        <div className='carInfo__block'>
          <p>Consumption:</p>
          <p>
            {car.consumption}
            <span> L/100km</span>
          </p>
        </div>

        <div className='carInfo__block'>
          <p>Fuel type:</p>
          <p>{car.fuelType}</p>
        </div>
      </div>
    </Modal>
  );
};
