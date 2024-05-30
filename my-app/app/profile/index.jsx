import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { UserContext } from "../_layout";
import { Redirect,Link } from 'expo-router';

export default function index() {

  return (
    <View>
      <Link href={'/profile/camera'}>Camera</Link>
    </View>
  )
}

// Exercice:
// Créer une dossier profile:
// 1. Ajouter Layout en mode Stack
// 2. Fichier index.jsx: Utiliser le contexte pour afficher l'email de l'utilisateur
// 3. Chercher dans la documentation comment rediriger l'utilisateur.
// 4. Rediriger l'utilisateur vers la page de profile après la connexion

