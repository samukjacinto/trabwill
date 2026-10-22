import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CalculatorScreen from './src/pages/CalculatorScreen';
import { colors } from './src/constants/theme';

// App só monta a tela: toda a lógica mora no hook e a UI nos componentes.
const App = () => (
  <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="light-content" backgroundColor={colors.header} />
    <CalculatorScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
});

export default App;
