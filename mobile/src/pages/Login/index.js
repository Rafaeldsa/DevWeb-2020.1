import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
} from "react-native";

import api from "../../services/api";
import styles from "./styles";
export default function Login() {
  const [emailUser, setEmailUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  function navigateToResgiter() {
    navigation.navigate("Register");
  }
  async function singIn(emailUser, senhaUser) {
    const res = await api.post("login", {
      emailUser,
      senhaUser,
    });

    if (!res.data[0]) {
      setErrorMessage(res.data.message);
      Alert.alert(errorMessage);
      return;
    }
    const user = res.data[1].user;
    setToken(res.data[0].authorization);
    _storeData(token, user);
    Alert.alert("Login realizado com sucesso!");
    navigation.navigate("Donation");
  }
  async function _storeData(token, user) {
    try {
      await AsyncStorage.multiSet([
        ["@DoeSangue:token", token],
        ["@DoeSangue:user", JSON.stringify(user)],
      ]);
    } catch (error) {
      // Error saving data
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DoeSangue</Text>
      </View>

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.entrada}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#e02041"
          value={emailUser}
          onChangeText={(value) => setEmailUser(value)}
        />
        <TextInput
          style={styles.entrada}
          underlineColorAndroid="transparent"
          placeholder="Senha"
          placeholderTextColor="#e02041"
          secureTextEntry={true}
          value={senhaUser}
          onChangeText={(value) => setSenhaUser(value)}
        />
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => singIn(emailUser, senhaUser)}
          >
            <Text style={styles.actiontext}> Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.actiontext}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadastro}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToResgiter()}
          >
            <Text style={styles.detailsButtonText}>Não tenho cadastro</Text>
            <Feather name="user" size={24} color="#e02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
