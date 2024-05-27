import { View, Text, TextInput, StyleSheet } from "react-native";

const TextArea = ({placeholder, nombreLignes, error, action}) => {
  return (
    <View>
      <TextInput
      style={style.textarea}
        placeholder={placeholder}
        multiline
        numberOfLines={nombreLignes}
        onChangeText={action}
      ></TextInput>
      <Text style={style.text}>{error}</Text>
    </View>
  );
};

const style = StyleSheet.create({
    textarea:{
        backgroundColor: "grey",
        color: "white",
        padding: 10,
        margin: 5,
    },
    text:{
        color:'red'
    }
})

export default TextArea
// Exercice:
// Créer le composant TextArea (/components/TextArea/TextArea.jsx):
// Le composant reçoit: placeholder, nombreLignes, error et action
// Stylise le composant
// Remplacer le composant textInput dans contact
