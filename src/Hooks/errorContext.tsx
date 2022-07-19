import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

interface ErrorContextProps {
  hasError: boolean;
  isConnected: boolean;
  setHasError: (value: boolean) => void;
  setIsConnected: (value: boolean) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ErrorContext = createContext({} as ErrorContextProps);



function ErrorContextProvider({ children }: ProviderProps) {

  const [hasError, setHasError] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {

    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected!);
    });

  }, [isConnected]);

  return (
    <ErrorContext.Provider value={{
      isConnected,
      hasError,
      setHasError,
      setIsConnected
    }}>
      {children}
    </ErrorContext.Provider>
  );
}

function useError() {
  const context = useContext(ErrorContext);

  return context;
}

export { ErrorContextProvider, useError }