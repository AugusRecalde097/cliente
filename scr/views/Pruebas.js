import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ListItem, Avatar, Icon } from '@rneui/themed';
import ModalPoup from "../components/CustomModal";
import CustomButton from "../components/button";

// const ModalPoup = ({visible, children}) => {
//   const [showModal, setShowModal] = React.useState(visible);
//   const scaleValue = React.useRef(new Animated.Value(0)).current;
//   React.useEffect(() => {
//     toggleModal();
//   }, [visible]);
//   const toggleModal = () => {
//     if (visible) {
//       setShowModal(true);
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setTimeout(() => setShowModal(false), 200);
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };
//   return (
//     <Modal transparent visible={showModal}>
//       <View style={styles.modalBackGround}>
//         <Animated.View
//           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
//           {children}
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// Render de la pantalla
const Pruebas = () => {
  const initialOptionModal = {
    title: "", 
    typeInput: "",
    confirmButton: true
  } 
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [itemSelect, setSelectedItem] = useState(null);
  const [optionModal, setOptionModal] = useState({})

  const handlePressAccept = () => {
    console.log("Pantalla Prueba: ", itemSelect);
    setVisibleModal(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Modal */}
      <ModalPoup
        title="Prueba de titulo"
        visible={visibleModal}
        itemSelect={itemSelect}
        onSelect={setSelectedItem}
      >
        
        {/* Botones de confirmación y cancelar */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 8,
          }}
        >
          <CustomButton
            style={{
              backgroundColor: "#009EA2",
              width: "40%",
              paddingHorizontal: 20,
            }}
            onPressFunction={() => handlePressAccept()}
            title="Aceptar"
          />
          <CustomButton
            style={{
              backgroundColor: "#a20400",
              width: "40%",
              paddingHorizontal: 20,
            }}
            onPressFunction={() => setVisibleModal(false)}
            title="Cancelar"
          />
        </View>
      </ModalPoup>
      <Button title="Open Modal" onPress={() => setVisibleModal(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Pruebas;
