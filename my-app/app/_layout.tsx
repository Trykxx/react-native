import { Stack } from 'expo-router';

export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  )
}

// Expo utilise la navigation par structure de dossier