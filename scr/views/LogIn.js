import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input } from '@rneui/themed';

import { LinearGradient } from "expo-linear-gradient";
import errores from "../msgErrors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = (prop) => {
  const [state, setstate] = useState({
    name: "",
    user: "",
    email: "",
    pass: "",
    confirPass: "",
  });
  const [modalVisible, setModalVisible] = useState({
    state: false,
    mensaje: "",
  });
  const mensajesErr = errores.mensajesErrores;

  // Definición de una funciones
  const handleChangeText = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  useEffect(() => {

  }, []);

  const mensajeError = (codeError) => {
    // alert(codeError)

    setModalVisible({
      state: true,
      mensaje: mensajesErr[codeError],
    });
  };

  const handleLogin = () => {
    prop.navigation.navigate("Dashboard");
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.state}
        onRequestClose={() => {
          setModalVisible({ ...modalVisible, state: false });
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalVisible.mensaje}</Text>
            <TouchableOpacity
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible({ ...modalVisible, state: false })}
            >
              <Text style={styles.textButton}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  //===================================//
  return (
    <LinearGradient
      colors={["#B3D9DA", "#F6DF7F"]}
      style={styles.linearGradient}
    >
      <View>{renderModal()}</View>
      <Image style={styles.logo} source={require("../img/logo.png")} />
      <Text style={styles.textHelp}>
        Iniciar sesión para acceder a todo el historial de sintomas y
        estadisticas.
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 19,
          position: "absolute",
          width: 311,
          height: 151,
          left: "9%",
          top: "50%",
          bottom: 212,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
        }}
      >
        <View style={styles.inputGroup}>
          <Input
            style={styles.TextInput}
            placeholder="Correo electrónico"
            onChangeText={(value) => handleChangeText("email", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Input
            style={styles.TextInput}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText("pass", value)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.textButton}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 11,

    position: "absolute",
    width: 287,
    height: 35,
    left: "13%",
    top: "80%",
    backgroundColor: "#009EA2",
  },
  textButton: {
    position: "relative",
    width: 267,
    height: 16,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  TextInput: {
    fontSize: 16,
    width: "100%",
  },
  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,

    position: "relative",
    width: "100%",
    height: "20%",
  },

  container: {
    position: "absolute",
    left: "15.47%",
    right: "18.67%",
    top: "10.1%",
    bottom: "72.41%",
    width: 319,
    height: 158,
  },

  logo: {
    position: "absolute",
    left: "17.07%",
    right: "17.07%",
    top: "13.67%",
    bottom: "68.84%",
    width: 247,
    height: 142,
    resizeMode: "stretch",
  },
  listaUsuario: {
    position: "absolute",
    left: "10%",
    top: "50%",
    width: 319,
    height: 158,
  },
  linearGradient: {
    position: "relative",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textHelp: {
    position: "absolute",
    height: 33,
    top: "40%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#655C34",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#009EA2",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default LogIn;
