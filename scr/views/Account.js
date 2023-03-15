import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import errores from "../msgErrors";
import { Card, Icon, Input } from '@rneui/themed';
import { styles } from "../styles";
import { SIZES, COLORS } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/button";
import CustomTextInfo from "../components/CustomTextInfo";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownCustom from "../components/CustomDropDown";
import ModalCustom from "../components/CustomModal";

const ScreenContainer = ({ navigation }) => {
  const initialDataMod = {
    id: "",
    name: "",
    sexo: "",
    edad: "",
    email: "",
    fNacimiento: "",
  };

  const initialPatolog = {
    tipo: "",
    musculo: "",
    grado: "",
  };

  const [userData, setUserData] = useState({ ...initialDataMod });
  const [userDataMod, setUserDataMod] = useState({ ...initialDataMod });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [datosPatologState, setdatosPatolog] = useState({ ...initialPatolog });
  const [modalVisible, setModalVisible] = useState({
    state: false,
    mensaje: "",
    dato: "",
  });
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };



  const handleConfirm = (date) => {
    let fecha = new Date(date);
    let anio = fecha.getFullYear();
    let mes =
      fecha.getMonth() + 1 < 10
        ? "0" + (fecha.getMonth() + 1)
        : fecha.getMonth() + 1;
    let dia = fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate();
    let fechaFinal = dia + "/" + mes + "/" + anio;
    console.log(userData);
    setUserData({ ...userData, fNacimiento: fechaFinal });
    hideDatePicker();
  };



  const handleChangeText = (name, value) => {
    setUserDataMod({ ...userDataMod, [name]: value });
  };

  const handlePressAccept = (dato) => {
    setUserData({
      ...userData,
      [dato]: userDataMod[dato],
    });
    setModalVisible({ ...modalVisible, state: false });
  };


  const handlePressCancelModal = () => {
    setModalVisible({ ...modalVisible, state: false });
  };

  const renderModal = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#009EA2",
          height: "100%",
          width: "100%",
        }}
      >
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible.state}
          onRequestClose={() => {
            setModalVisible({ ...modalVisible, state: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* Titulo  */}
              <Text style={styles.modalText}>{modalVisible.mensaje}</Text>
              <DropDownCustom
                data={dataPruebaDrop}
                value={selectedItem}
                onSelect={onSelect}
              />
              {/* Campo de modificación */}
              <TextInput
                style={[
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: "#E5E5E5",
                    marginBottom: 15,
                    textAlign: "left",
                    width: "80%",
                  },
                ]}
                value={userDataMod[modalVisible.dato]}
                onChangeText={(value) =>
                  handleChangeText([modalVisible.dato], value)
                }
              />
              {/* Botones de confirmación y cancelar */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <CustomButton
                  style={{
                    backgroundColor: "#009EA2",
                    width: "40%",
                    paddingHorizontal: 20,
                  }}
                  onPressFunction={() => handlePressAccept(modalVisible.dato)}
                  title="Aceptar"
                />
                <CustomButton
                  style={{
                    backgroundColor: "#a20400",
                    width: "40%",
                    paddingHorizontal: 20,
                  }}
                  onPressFunction={() => handlePressCancelModal()}
                  title="Cancelar"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  // Render de la pantalla
  let dataPruebaDrop = [
    { id: 1, name: "Femenino" },
    { id: 2, name: "Masculino" },
  ];

  //Selector de dropdown
  const onSelect = (item) => {
    setModalVisible({ ...modalVisible, state: false });
    setSelectedItem(item);
    console.log(modalVisible);
  };

  // Pantalla de modificación de datos de usuario
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#B3D9DA", "#F6DF7F"]}
          style={styles.linearGradient}
        >
          {/* <View>{renderModal()}</View> */}
          <View>
            <ModalCustom 
            title="Modificar datos"
            field="Nombre"
            value={userData.name}
            onChangeText={(value) => console.log("name", value)}
            visible={modalVisible.state}
            />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Card containerStyle={styles.cardContainer} key={1}>
            <Card.Title
              style={{
                alignItems: "center",
                alignContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.fontTitles}>Datos personales</Text>
            </Card.Title>
            <Card.Divider />
            <Pressable
              onPress={() => {
                setModalVisible({
                  state: true,
                  mensaje: `Editar el nombre`,
                  dato: "name",
                });
              }}
            >
              <CustomTextInfo textLabel="Nombre" textValue={userData?.name} />
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible({
                  state: true,
                  mensaje: `Editar el email`,
                  dato: "email",
                });
              }}
            >
              <CustomTextInfo textLabel="Email" textValue={userData?.email} />
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible({
                  state: true,
                  mensaje: `Editar el sexo`,
                  dato: "sexo",
                });
              }}
            >
              <CustomTextInfo textLabel="Sexo" textValue={userData?.sexo} />
            </Pressable>
            <Pressable
              onPress={() => {
                showDatePicker();
              }}
            >
              <CustomTextInfo
                textLabel="F. Nacimiento"
                textValue={userData?.fNacimiento}
              />
            </Pressable>
          </Card>
          <Card containerStyle={styles.cardContainer} key={2}>
            <Card.Title
              style={{
                alignItems: "center",
                alignContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.fontTitles}>Datos patologicos</Text>
            </Card.Title>
            <Card.Divider />
            <Pressable
              onPress={() => {
                setModalVisible({
                  state: true,
                  mensaje: `Editar el tipo de Miastenia`,
                  dato: "tipo",
                });
              }}
            >
              <CustomTextInfo
                textLabel="Tipo"
                textValue={datosPatologState?.tipo}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible({
                  state: true,
                  mensaje: `Editar los músculos afectados`,
                  dato: "musculo",
                });
              }}
            >
              <CustomTextInfo
                textLabel="Músculos Afec."
                textValue={datosPatologState?.musculo}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                alert("II a");
              }}
            >
              <CustomTextInfo
                textLabel="Grado"
                textValue={datosPatologState?.grado}
              />
            </Pressable>
          </Card>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton
              style={{ backgroundColor: "#009EA2", width: "40%" }}
              onPressFunction={() => {
                updateUser();
              }}
              title="Guardar"
            />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  input: {
    height: 20,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default ScreenContainer;
