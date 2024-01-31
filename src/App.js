import './App.css';
import { ListOfCars } from './components/cars/ListOfCars';
import { FuelPrice } from './components/FuelPrice';
import { AddMileageIntoTrip } from './components/mileage/AddMileageIntoTrip';
import { RootLayout } from './components/RootLayout';
import { ListOfTrips } from './components/trips/ListOfTrips';

function App() {
  return (
    <main className='App'>
      <RootLayout>
        <ListOfCars />
        <ListOfTrips />
        <AddMileageIntoTrip />
        <FuelPrice />
      </RootLayout>
    </main>
  );
}

export default App;
