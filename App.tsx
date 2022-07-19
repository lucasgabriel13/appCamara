import { StatusBar } from 'expo-status-bar';
import { ErrorContextProvider } from './src/Hooks/errorContext';
import Home from './src/pages/Home';

export default function App() {

  return (
    <>
      <ErrorContextProvider>
        <Home />
      </ErrorContextProvider>
      <StatusBar translucent style='light' />
    </>
  );
}
