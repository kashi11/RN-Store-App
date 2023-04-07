import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Navigation} from 'navigation';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
      <Toast position='bottom' />
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
