import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const PasswordInput = ({ placeholder, error, action }) => {
  const [isPassword, setisPassword] = useState(false);

  function togglePassword() {
    setisPassword(!isPassword);
  }

  return (
    <View>
      <View style={PasswordInputStyle.input}>
        <TextInput
          placeholder={placeholder}
          onChangeText={action}
          secureTextEntry={!isPassword}
        ></TextInput>
        <Feather
          name={isPassword ? "eye" : "eye-off"}
          size={24}
          color={isPassword ? "green" : "orange"}
          onPress={togglePassword}
        />
      </View>
      <Text style={PasswordInputStyle.text}>{error}</Text>
    </View>
  );
};

const PasswordInputStyle = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "palevioletred",
  },
});

export default PasswordInput;