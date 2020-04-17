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
export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.cadastroContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#e02041"
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#e02041"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Senha"
          placeholderTextColor="#e02041"
          secureTextEntry={true}
          value={senha}
          onChangeText={(value) => setSenha(value)}
        />
      </View>
      <View style={styles.cadastro}>
        <TouchableOpacity
          style={styles.cadastroButton}
          onPress={() => navigateBack()}
        >
          <Text style={styles.cadastroButtonText}>Cadastrar</Text>
          <Feather name="edit" size={24} color="#e02041" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
