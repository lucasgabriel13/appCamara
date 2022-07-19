import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useError } from '../Hooks/errorContext';

export function Error() {

  const { isConnected, hasError, setHasError, setIsConnected } = useError();

  function restartErrors() {
    setIsConnected(true);
  }

  return (
    <>
      {!isConnected && (
        <View style={styles.container}>
          <Text style={styles.title}>Sem internet!</Text>
          <Text style={styles.subtitle}>😔 Você está sem conexão com a internet! {"\n"} Conecte e tente novamente!</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={restartErrors}
          >
            <Text style={styles.textButton}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {hasError && (
        <View style={styles.container}>
          <Text style={styles.title}>Ocorreu um erro!</Text>
          <Text style={styles.subtitle}>A tela que você está acessando, pode não existir ou está fora do ar!</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setHasError(false)}
            activeOpacity={0.9}
          >
            <Text style={styles.textButton}>Volte à página principal</Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style='dark' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#1f1f1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    fontFamily: 'sans-serif',
    marginBottom: 15,
    color: "#007297"
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    textAlign: "center"
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007297",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    borderRadius: 8
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#FFFFFF"
  }
})
