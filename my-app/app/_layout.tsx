// import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout(){
  return (
    <GestureHandlerRootView>
      <Drawer
      screenOptions={{
        headerStyle:{
          backgroundColor:'royalblue'
        },
        headerTitleStyle:{
          color:'whitesmoke'
        },
        headerTintColor:'whitesmoke'
      }}>
        <Drawer.Screen name='index' options={{
          drawerLabel:'Accueil',
          title:"Page d'Accueil",
          headerStyle:{
            backgroundColor:'red'
          }
        }}
      />
      </Drawer>
      {/* <Stack.Screen name='index' />
      <Stack.Screen name='contact' /> */}
    </GestureHandlerRootView>
  )
}

// Expo utilise la navigation par structure de dossier

// Expo nous offre plusieurs sortes de navigation:
  // Navigation en Stack(Pile)
  // Navigation en Drawer(tiroire, menu qui sort de la droite)
  // Navigation en tab(onglets)