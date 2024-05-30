import React, { useContext, useState } from "react"
import {View , Text} from "react-native"
import InputAvecError from "../../components/inputAvecError";
import Bouton from "../../components/Bouton.jsx";
import { Link } from "expo-router";
import PassWordInput from "../../components/PasswordInput.jsx";
import { UserContext } from "../_layout.jsx";

export default function Connexion(){
  const {user, setUser}=useContext(UserContext)
    const[userEmail,setUserEmail]=useState("")
    const[userEmailError,setUserEmailError]=useState("")

    const[passWord,setPassWord]=useState("")
    const[passWordErr,setPassWordErr]=useState("")
    function InsertionEmail(text){
        setUserEmailError("")
        setUserEmail(text)
        if(userEmail==""){
            return setUserEmailError("Email obligatoire")
        }
        if(!userEmail.includes('@')){
            return setUserEmailError("Email invalide")
        }
    }
    function InsertionPasseWord(text){
        setPassWordErr("")
        setPassWord(text)
        if(passWord ==""){
            return setPassWordErr("Mot de passe incorrect")
        }
    }
    function submit(){
        if(!userEmail.includes('@')){
            return setUserEmailError("Email invalide")
        }if(passWord ==""){
            return setPassWordErr("Mot de passe incorrect")
        }
          setUser({email:userEmail})
    }

    return (
    <View>
        <Link href={"/authentification/register"}>Inscription</Link>
        <InputAvecError placeholder={"Email"} action={InsertionEmail}
        type="email-address"
        error={userEmailError} ></InputAvecError>
        <PassWordInput placeholder={"Mot de passe"} action={InsertionPasseWord} error={passWordErr}></PassWordInput>
        <Bouton label={"Connexion"} action={submit}></Bouton>
    </View>

    )
}