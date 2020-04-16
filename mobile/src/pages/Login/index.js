import React, { Component } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import api from "../../services/api";
import styles from "./styles";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailUser: "",
      senhaUser: "",
    };
  }
  login = async (emailUser, senhaUser) => {
    const res = await api.post("login", {
      emailUser,
      senhaUser,
    });
    alert(JSON.stringify(res.data));
  };
  handleEmail = (text) => {
    this.setState({ emailUser: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Doe Sangue</Text>
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.entrada}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#e02041"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <TextInput
            style={styles.entrada}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#e02041"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={this.handlePassword}
          />
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.login(this.state.emailUser, this.state.senhaUser)
              }
            >
              <Text style={styles.actiontext}> Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.actiontext}>Esqueci a Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
