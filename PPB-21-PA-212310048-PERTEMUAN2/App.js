import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Motorcycle from './components/Motorcycle';
import Bicycle from './components/Bicycle';
import {ItemImage} from './components/Items/ItemImage';
import {ItemTyphograp} from './components/Items/ItemTyphograp';
import No2 from './components/Tugas/No2';
import No3 from './components/Tugas/No3';
import No4RCC from './components/Tugas/No4RCC';
import No4RFC from './components/Tugas/No4RFC';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <No4RCC/>
      <No4RFC/>
    </SafeAreaView>
    // <No3/>
    // <No2/>
    // <ItemTyphograp/>
    // <ItemImage/>
    // <Motorcycle/>
    // <Car/>
    // <Bicycle/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
