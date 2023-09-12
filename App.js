import { GluestackUIProvider, Text, Box, config } from '@gluestack-ui/themed';
import { HealthyLife } from './src/Navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config.theme}>
        <HealthyLife/>
      </GluestackUIProvider>
    </Provider>
  );
}