# Travel Cost

A React application for tracking and managing travel expenses, car information, and fuel costs.

### Features

- Add and manage cars with detailed information:

  - Brand
  - Model
  - Year
  - Engine size
  - Fuel consumption
  - Fuel type (LPG, Gas, Diesel)

- Create and track trips:

  - Name trips
  - Assign cars to trips
  - Track mileage
  - Calculate trip costs based on fuel prices

- Manage fuel prices:
  - Update prices for different fuel types
  - Automatic cost calculation based on current prices
  - Support for LPG, Gas, and Diesel

### Project Structure

```
src/
  components/
    cars/           # Car management components
    trips/          # Trip management components
    mileage/        # Mileage tracking components
    FuelPrice.jsx   # Fuel price management
    RootLayout.jsx  # Main layout component
  services/
    localStorage.js # Local storage management
    validation.js   # Input validation
```

### Technologies Used

- React 18
- Ant Design (antd)
- Local Storage for data persistence
- React Context for state management

### Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production

### Data Storage

The application uses browser's Local Storage to persist:

- Car information
- Trip details
- Fuel prices
- Mileage data

### License

This project is private and not licensed for public use.

## Live test version is here -> <a href="https://fuel-cost-nu.vercel.app/" target="_blank" rel="nofollow">Trip Cost</a>

![Trip Cost App image](https://github.com/Mmarvinn/fuelCost/blob/main/public/travelCost.png 'Trip Cost')
