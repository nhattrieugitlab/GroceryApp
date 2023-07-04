import React, { ReactNode } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <SafeAreaView style={styles.body}>
    {children}
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});

export default ScreenContainer;
