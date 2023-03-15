import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { ListItem, Avatar, Icon } from '@rneui/themed';
import DropDown from './CustomDropDown';



const ModalPoup = ({title, visible, itemSelect = {}, onSelect = () =>{}, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const [selectedItem, setSelectedItem] = useState(itemSelect);

  let dataPruebaDrop = [
    { id: 1, name: "Femenino" },
    { id: 2, name: "Masculino" },
  ];

  //Selector de dropdown
  const onSelectDropdown = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }; 
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          <Text style={styles.modalText}>{title}</Text>
         
          
          <DropDown
                data={dataPruebaDrop}
                value={selectedItem}
                onSelect={onSelectDropdown}
              />
          
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
export default ModalPoup;

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Modal, TextInput,TouchableOpacity } from "react-native";
// import CustomButton from "../components/button";
// import CustomTextInfo from "../components/CustomTextInfo";

// const CustomModal = ({ title = '', field='', value = {}, onSelect = () => {} , visible = true }) => {


//   const [modalVisible, setModalVisible] = useState(visible);
//   const onSelectItem = (field, value) => {
//     onSelect(field, value);
//   };
//   const handlePressAccept = (field, value) => {
//     onSelect(field, value);
//     setModalVisible(false);
//   };
//   const handlePressCancelModal = () => {
//     setModalVisible(false);
//   };
//   console.log(modalVisible);
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#009EA2",
//         height: "100%",
//         width: "100%",
//       }}
//     >
//       <Modal
//         animationType="fade"
//         transparent
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             {/* Titulo  */}
//             <Text style={styles.modalText}>{title}</Text>
//             {/* Campo de modificación */}
//             <TextInput
//               style={[
//                 {
//                   borderBottomWidth: 1,
//                   borderBottomColor: "#E5E5E5",
//                   marginBottom: 15,
//                   textAlign: "left",
//                   width: "80%",
//                 },
//               ]}
//               value={value}
//               onChangeText={(value) =>
//                 onSelectItem(field, value)
//               }
//             />
//             {/* Botones de confirmación y cancelar */}
//             <View
//               style={{
//                 flexDirection: "row",
//                 width: "100%",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//               }}
//             >
//               <CustomButton
//                 style={{
//                   backgroundColor: "#009EA2",
//                   width: "40%",
//                   paddingHorizontal: 20,
//                 }}
//                 onPressFunction={() => handlePressAccept(modalVisible.dato)}
//                 title="Aceptar"
//               />
//               <CustomButton
//                 style={{
//                   backgroundColor: "#a20400",
//                   width: "40%",
//                   paddingHorizontal: 20,
//                 }}
//                 onPressFunction={() => handlePressCancelModal()}
//                 title="Cancelar"
//               />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     width: "100%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonClose: {
//     backgroundColor: "#009EA2",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   buttonModal: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
// });

// export default CustomModal;
