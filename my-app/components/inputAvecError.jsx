import { View, Text, TextInput, StyleSheet } from "react-native";

const InputAvecError = ({ placeholder, action, error, type }) => {
  return (
    <View>
      <TextInput
      style={style.input}
      placeholder={placeholder}
      onChangeText={action}
      keyboardType={type}
      ></TextInput>
      <Text style={style.error}>{error}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: "grey",
    color: "white",
    padding: 10,
    margin: 5,
  },
  error:{
    color:'red'
  }
});

export default InputAvecError

// Exercice:
// Créer le composant InputAvecError (/components/InputAvecError/InputAvecError.jsx):
// Le composant reçoit 4 props:
// Le placeholder, action(fonction a lier avec le onChangeText), type (Le type de clavie), error (Le message d'erreure a afficher sous l'input)

// Remplacer le composant input et son erreur dans contact.jsx

