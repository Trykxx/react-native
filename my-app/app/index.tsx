import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.titre}>Salut</Text>
    </View>
  );
}

// Il n'y a plus de HTML, on utilise des balises importés de react-native
// https://reactnative.dev/docs/components-and-apis

// Il n'y a plus de CSS, il faut utiliser la methode create() de StyleSheet
const style = StyleSheet.create({
  container:{
    backgroundColor : 'blue'
  },
  titre:{
    color:'white',
    margin:'auto',
    padding:10
  }
})