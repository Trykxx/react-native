import React, { useState } from "react";
import {View,Text} from 'react-native'
import InputAvecError from '../../components/inputAvecError'
import Bouton from '../../components/Bouton'




export default function index() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function changeEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function changeMessage(text) {
    setPasswordInput(text);
    setPasswordError("");
  }

  function submit() {
    if (!emailInput.includes("@")) {
      return setEmailError("Email obligatoire");
    }
    if (passwordInput == "") {
      setPasswordError("Mot de passe obligatoire");
    } else {
      alert(`Bienvenu : ${passwordInput}`);
    }
  }

  return (
    <View>
    <InputAvecError
      placeholder={"Saisissez votre email"}
      action={changeEmail}
      type="email-address"
      error={emailError}
    ></InputAvecError>
    <InputAvecError
      placeholder={"Saisissez votre mot de passe"}
      action={changeMessage}
      type="password"
      error={passwordError}
    ></InputAvecError>
    <InputAvecError
      placeholder={"Veillez saisir a nouveau votre mot de passe"}
      action={changeMessage}
      type="password"
      error={passwordError}
    ></InputAvecError>
    <Bouton label={"Connexion"} action={submit}></Bouton>
  </View>
  )
}