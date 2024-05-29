import { View, Text } from 'react-native';

export default function camera(params) {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <Text>Chargement...</Text>
    }
}