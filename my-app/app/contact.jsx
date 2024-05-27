import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Bouton from "../components/Bouton.jsx";
import InputAvecError from "../components/inputAvecError.jsx";
import TextArea from "../components/TextArea.jsx";

export default function contact() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [messageError, setMessageError] = useState("");

  function changeEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }
  function changeMessage(text) {
    setMessageInput(text);
    setMessageError("");
  }

  function submit() {
    if (!emailInput.includes("@")) {
      return setEmailError("Email obligatoire");
    }
    if (messageInput == "") {
      setMessageError("Message obligatoire");
    } else {
      alert(messageInput);
    }
  }

  return (
    <View style={style.formulaire}>
      {/* <TextInput
        style={style.container}
        placeholder="Entrez votre email..."
        onChangeText={changeEmail}
        keyboardType="email-address"
      ></TextInput>
      <Text style={{color:'red'}}>{emailError}</Text>

      <TextInput
        style={style.container}
        placeholder="Message"
        onChangeText={changeMessage}
        keyboardType="default"
      ></TextInput>
      <Text style={{color:'red'}}>{messageError}</Text> */}

      <InputAvecError
        placeholder="Email"
        action={changeEmail}
        type="email-address"
        error={emailError}
      ></InputAvecError>

      {/* <InputAvecError placeholder='Message' action={changeMessage} keyboardType ='default' error={messageError} ></InputAvecError> */}

      <TextArea
      placeholder="Message"
      nombreLignes="5"
      action={changeMessage}
      error={messageError}
      ></TextArea>

      <Bouton label="Envoyer" action={submit} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    color: "white",
    padding: 10,
    margin: 5,
  },
  formulaire: {
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
});

// Exercice:
// Créer un formulaire de contact avec:
// Email: obligatoire sinon message d'erreur
// Message: obligatoire sinon message d'erreurs
// Un bouton pour valider le formulaire
// Quand on clique sur le bouton, afficher une alerte avec le message
// Styliser le formulaire
