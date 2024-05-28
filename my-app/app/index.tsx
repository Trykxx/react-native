import { View, Text, Image } from 'react-native';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Image
      style={{
        width:"100%",
        height:500,
      }}
      source={{uri: "https://images.pexels.com/photos/20419408/pexels-photo-20419408/free-photo-of-art-mur-retro-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}>
      </Image>
      <Link href={'/contact'}>Contactez moi</Link>
    </View>
  );
}

// Il n'y a plus de HTML, on utilise des balises importés de react-native
// https://reactnative.dev/docs/components-and-apis

// Il n'y a plus de CSS, il faut utiliser la methode create() de StyleSheet

// Soit l'image est une URL:
// source={{
//  uri:"URL de l'image"
//  }}

// Soit l'image est dans le dossier:
// source:{require('./chemin/relatif/vers/image')}