import { BrowserRouter } from 'react-router-dom';
import ProviderWeatherContext from "./core/hooks";

import MainRoutes from './routes'

function App() {
  return (
    <ProviderWeatherContext>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ProviderWeatherContext>
  );
}

export default App;
