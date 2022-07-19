import { StatusBar } from 'expo-status-bar';
import { ErrorContextProvider, useError } from '../Hooks/errorContext';
import { Error } from './Error';
import { Web } from './Web';


export default function Home() {

  const { isConnected, hasError } = useError();

  return (
    <>
      {!isConnected || hasError ? (<Error />) : (<Web />)}
      <StatusBar translucent style='light' />
    </>
  );
}
