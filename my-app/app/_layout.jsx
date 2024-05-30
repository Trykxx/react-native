// import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';

export const UserContext = createContext()

export default function RootLayout(){
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user,setUser}}>
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
    </GestureHandlerRootView></UserContext.Provider>
  )
}

// Expo utilise la navigation par structure de dossier

// Expo nous offre plusieurs sortes de navigation:
  // Navigation en Stack(Pile)
  // Navigation en Drawer(tiroire, menu qui sort de la droite)
  // Navigation en tab(onglets)

// Exercice:
// layout principale:
// Créer un context
// Ajouter une variable d'atat user et setUser
// Ajouter le Provider avec les valeur user et setUser

// Dans connexion (index);
// Utiliser le contect pour mettre email dans la variable d'état user