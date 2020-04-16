import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Linking,
  TextInput,
} from "react-native";
import styles from "./styles";
import api from "../../services/api";

export default function Login() {
  const [email1, setEmail] = useState("");
  const [senha1, setSenha] = useState("");
  const navigation = useNavigation();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await api.post("login", {
      emailUser: email1,
      senhaUser: senha1,
    });

    alert(JSON.stringify(res.data));
    //navigation.navigate("Donation");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Doe Sangue</Text>
      </View>

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.entrada}
          placeholder="e-mail"
          placeholderTextColor="#D50000"
          value={email1}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          style={styles.entrada}
          secureTextEntry={true}
          placeholder="senha"
          placeholderTextColor="#D50000"
          value={senha1}
          onChange={(e) => setSenha(e.target.value)}
        />
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.actiontext}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.actiontext}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
