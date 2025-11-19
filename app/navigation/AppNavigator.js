import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TrainingScreen from '../screens/TrainingScreen';
import MeditationScreen from '../screens/MeditationScreen';
import ScriptureScreen from '../screens/ScriptureScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="Meditation" component={MeditationScreen} />
        <Stack.Screen name="Scripture" component={ScriptureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
