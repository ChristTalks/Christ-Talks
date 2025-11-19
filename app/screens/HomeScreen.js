import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE PATH OF TWO FIRES</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Training')}
      >
        <Text style={styles.buttonText}>Training</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Meditation')}
      >
        <Text style={styles.buttonText}>Meditation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Scripture')}
      >
        <Text style={styles.buttonText}>Scripture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 40,
    fontWeight: 'bold'
  },
  button: {
    width: '80%',
    padding: 20,
    backgroundColor: '#222',
    borderRadius: 12,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});
