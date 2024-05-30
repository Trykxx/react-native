import { View, Text, Button, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Ionicons,Feather } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';
import { useRef } from "react";
import * as MediaLibrary from 'expo-media-library'

export default function camera() {
  const [flash, setFlash] = useState(false);
  const [facing, setFacing] = useState("back");
  const [zoom, setZoom] = useState(0);
  const cameraRef = useRef()

  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestMediaPermission] = MediaLibrary.usePermissions();

  async function prendrePhoto() {
    const image = await cameraRef.current.takePictureAsync()
    if (!permissionResponse.granted) {
      await requestMediaPermission()
    }
    const savedImage = await MediaLibrary.createAssetAsync(image.url)
}

  if (!permission) {
    return <Text>Chargement...</Text>;
  }

  if (!permission.granted) {
    <View>
      <Text>Permissions non acceptés</Text>
      <Button
        onPress={requestPermission}
        title="Accepter la permission"
      ></Button>
    </View>;
  }

  function toggleCamera() {
    setFacing(facing === "back" ? "front" : "back");
  }
  function toggleFlash() {
    setFlash(flash === false ? true : false);
  }
  function toggleZoom() {
    setZoom(zoom=== 0 ? 1 : 0);
  }
  

  return (
    <View>
      <CameraView style={style.camera} facing={facing} enableTorch={flash} zoom={zoom} ref={cameraRef}>
        <Slider minimumValue={0} maximumValue={0.5} step={0.001} onValueChange={toggleZoom}></Slider>
        <View style={style.buttons}>
          <FontAwesome6
            name="camera-rotate"
            size={50}
            color="white"
            onPress={toggleCamera}
          />
          <Ionicons
            name="flashlight-sharp"
            size={50}
            color="white"
            onPress={toggleFlash}
          />
          <Feather
            name="zoom-in"
            size={50}
            color="white"
            onPress={toggleZoom}
          />
          <FontAwesome6 name="camera" size={50} color="green" onPress={prendrePhoto}/>
        </View>
      </CameraView>
    </View>
  );
}

const style = StyleSheet.create({
  camera: {
    height: 500,
    width: "100%",
  },
  buttons: {
    bottom: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5",
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:20
  },
});
