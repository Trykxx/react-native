import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="index"
      options={{ title:"Connexion",
      tabBarIcon: ({ color }) => <AntDesign name="login" size={24} color="black" />
       }} />
      <Tabs.Screen
      name="register"
      options={{ title:"Inscription",
      tabBarIcon: ({ color }) => <Entypo name="login" size={24} color="black" />
       }} />
    </Tabs>
  );
}
