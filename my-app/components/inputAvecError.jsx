import { View, Text, TextInput, StyleSheet } from "react-native";

const InputAvecError = ({ placeholder, action, error, type }) => {
  return (
    <View>
      <TextInput
      style={inputStyle.input}
      placeholder={placeholder}
      onChangeText={action}
      keyboardType={type}
      ></TextInput>
      <Text>{error}</Text>
    </View>
  );
};

const inputStyle = StyleSheet.create({
  input: {
    backgroundColor: "grey",
    color: "white",
    padding: 10,
    margin: 5,
  },
});

export default InputAvecError

// Exercice:
// Créer le composant InputAvecError (/components/InputAvecError/InputAvecError.jsx):
// Le composant reçoit 4 props:
// Le placeholder, action(fonction a lier avec le onChangeText), type (Le type de clavie), error (Le message d'erreure a afficher sous l'input)

// Remplacer le composant input et son erreur dans contact.jsx

