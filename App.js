import { StyleSheet, View } from 'react-native';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
