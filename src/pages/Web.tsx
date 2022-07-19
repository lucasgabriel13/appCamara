import WebView from "react-native-webview"
import { StyleSheet, View } from 'react-native';
import { useError } from "../Hooks/errorContext";

export function Web() {

  const { setHasError } = useError();

  return (
    <>
      <View style={styles.container}></View>
      {/*@ts-ignore*/}
      < WebView
        source={{ uri: 'https://appdemo.demo.nuvemlegislativa.com.br' }}
        onError={() => setHasError(true)}
        cacheEnabled
        cacheMode="LOAD_DEFAULT"
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    backgroundColor: '#007297',
  },
});