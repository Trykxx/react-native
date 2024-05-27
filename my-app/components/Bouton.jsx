import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const Bouton = ({action,label}) => {
    return (
        <TouchableOpacity style={buttonStyle.bouton} onPress={action}>
            <Text style={buttonStyle.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const buttonStyle = StyleSheet.create({
    bouton: {
        backgroundColor:'royalblue',
        padding:10,
        borderRadius:5,
    },
    label:{
        color:'white'
    }
})

export default Bouton