import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Input } from "@rneui/themed";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import errores from "../msgErrors";

const CreateUserScreen = (prop) => {
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

  const listaSintomas = [
    {
      id: 1,
      title: "Visión doble",
      ptos: 2,
    },
    {
      id: 2,
      title: "Visión doble",
      ptos: 5,
    },
    {
      id: 3,
      title: "Ptosis",
      ptos: 1,
    },
    {
      id: 4,
      title: "Deglución",
      ptos: 3,
    },
    {
      id: 5,
      title: "Inicio de Disartria",
      ptos: 3,
    },
  ];

  // Definición de una funciones
  const handleChangeText = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  const handleSingUp = async () => {
    if (state.email == "") {
      setModalVisible({
        state: true,
        mensaje: "Por favor ingrese un mail",
      });
    } else if (state.pass == "") {
      setModalVisible({
        state: true,
        mensaje: "Por favor ingrese una contraseña",
      });
    } else if (state.pass != state.confirPass) {
      setModalVisible({
        state: true,
        mensaje: "Las contraseñas no coinciden. Vuelve a intentarlo.",
      });
    }
    prop.navigation.navigate("LogIn");
  };
  const mensajeError = (codeError) => {
    //alert(codeError)

    setModalVisible({
      state: true,
      mensaje: mensajesErr[codeError],
    });
  };

  function renderModal() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.state}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible({ ...modalVisible, state: false });
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalVisible.mensaje}</Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible({ ...modalVisible, state: false })}
            >
              <Text style={styles.textButton}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }

  //===================================//
  return (
    <LinearGradient
      colors={["#B3D9DA", "#F6DF7F"]}
      style={styles.linearGradient}
    >
      <View style={styles.CentrarElementos}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            padding: 19,

            position: "absolute",
            width: 311,
            height: 251,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
          }}
        >
          <View style={styles.inputGroup}>
            <Input
              style={styles.TextInput}
              placeholder="Nombre y Apellido"
              onChangeText={(value) => handleChangeText("name", value)}
            />
          </View>

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
              placeholder="Contraseña nueva"
              secureTextEntry={true}
              onChangeText={(value) => handleChangeText("pass", value)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Input
              style={styles.TextInput}
              placeholder="Confirmar contraseña"
              secureTextEntry={true}
              onChangeText={(value) => handleChangeText("confirPass", value)}
            />
          </View>
          <Pressable style={styles.button} onPress={() => handleSingUp()}>
            <Text style={styles.textButton}>Registrarse</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};
// onPress={() => createNewUser()}
const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,

    position: "relative",
    width: 287,
    height: 35,
    backgroundColor: "#009EA2",
  },
  TextInput: {
    fontSize: 16,
    width: "100%",
  },
  inputGroup: {
    /* Auto Layout */
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
  textButton: {
    position: "relative",
    width: 267,
    height: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 16,
    /* identical to box height */
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
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
  CentrarElementos: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "10%",
  },
  logo: {
    display: "flex",
    position: "absolute",
    top: "4%",
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
    flex: 1,
    display: "flex",
    paddingLeft: 15,
    paddingRight: 15,
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
    width: "80%",
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

export default CreateUserScreen;
