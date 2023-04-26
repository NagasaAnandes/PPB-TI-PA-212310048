import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import MyFriends from './components/Friends/MyFriends';
import HomePage from './Instagram/HomePage';

export default function App() {
  return <HomePage/>
}
  {/* <MyFriends/> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
