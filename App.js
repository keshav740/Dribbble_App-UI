import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScree from './Components/HomeScree';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    
    <View style={styles.container}>
      <HomeScree />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
