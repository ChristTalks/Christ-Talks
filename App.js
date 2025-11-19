// App.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import VideoFeed from './components/VideoFeed';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Pathway</Text>
      </View>
      <VideoFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'transparent'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  }
});
