import { Stack } from "expo-router/stack";
import  React  from "react";

export default function _layout(){
    return (
        <Stack>
            <Stack.Screen name="index" />
        </Stack>
    )
}