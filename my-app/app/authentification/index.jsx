import { View, Text } from "react-native";
import React, { useState } from "react";
import InputAvecError from "../../components/inputAvecError";
import Bouton from "../../components/Bouton";

export default function index() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmail(value) {
    setEmailInput(value);
    setEmailError("");
  }

  function handlePassword(value) {
    setPasswordInput(value);
    setPasswordError("");
  }

  async function submit() {
    if (!emailInput.includes("@") || passwordInput.length < 6) {
      setEmailError(!emailInput.includes("@") ? "Email incorrect" : setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court" : "")
    );
    return;
    }
    alert(`Bienvenu : ${emailInput}`);
  }

  return (
    <View>
      <InputAvecError
        placeholder={"Email..."}
        action={handleEmail}
        type="email-address"
        error={emailError}
      ></InputAvecError>
      <InputAvecError
        placeholder={"Mot de passe..."}
        action={handlePassword}
        type="password"
        error={passwordError}
      ></InputAvecError>
      <Bouton label={"Connexion"} action={submit}></Bouton>
    </View>
  );
}
