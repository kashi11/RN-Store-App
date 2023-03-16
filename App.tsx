/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SignupScreen } from 'screens/auth/signup-screen';
import { QueryClient, QueryClientProvider } from 'react-query';


function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <QueryClientProvider client={queryClient}><SignupScreen /></QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
