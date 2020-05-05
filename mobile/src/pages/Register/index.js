import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { getAllStates, getAllCities, getStateCities } from "easy-location-br";
import RNPickerSelect from "react-native-picker-select";
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
  const [estadoAtual, setEstadoAtual] = useState("");
  var cidades = [];
  var estados = [];

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  function carregaEstados() {
    for (var j = 0; j < getAllStates().length; j++) {
      estados[j] = {
        label: getAllStates()[j].id,
        value: getAllStates()[j].id,
      };
    }
  }

  useEffect(() => {
    for (var j = 0; j < getStateCities(estadoAtual).length; j++) {
      cidades[j] = {
        label: getStateCities(estadoAtual)[j].id,
        value: getStateCities(estadoAtual)[j].name,
      };
    }
  }, [estadoAtual]);

  carregaEstados();

  console.log(cidades);
  console.log(estadoAtual);
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
        <View>
          <RNPickerSelect
            onValueChange={(value) => {
              setEstadoAtual(value);
            }}
            items={estados}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value.value)}
            items={cidades}
          />
        </View>
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
