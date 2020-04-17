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
  return <View style={styles.container}></View>;
}
