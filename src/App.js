import './App.css';
import { ListOfCars } from './components/cars/ListOfCars';
import { RootLayout } from './components/RootLayout';
import { ListOfTrips } from './components/trips/ListOfTrips';

function App() {
  return (
    <main className='App'>
      <RootLayout>
        <ListOfCars />
        <ListOfTrips />
      </RootLayout>
    </main>
  );
}

export default App;
