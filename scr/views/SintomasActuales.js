import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import errores from "../msgErrors";
import { Card, Icon, Input } from '@rneui/themed';
import { styles } from "../styles";
import { SIZES, COLORS } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/button";
import CustomTextInfo from "../components/CustomTextInfo";

const ScreenContainer = ({ navigation }) => {
  const [SintomaState, setSintomaState] = useState({
    ultimoSintoma: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("historial").then((value) => {
        if (value != null) {
          let historial = JSON.parse(value);
          //console.log(historial);
          setSintomaState({
            ultimoSintoma: historial.ultimoSintoma[0].sintomas,
            totalPtos: historial.ultimoSintoma[0].totalPtoSintomas,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

const renderSintomasActuales = (sintomasCollection = []) => {
    //console.log(sintomasCollection)
    
    return sintomasCollection.map((sintoma) => (
            <Pressable
            key={sintoma.id}
            onPress={() => {
              alert(sintoma.title);
            }}
          >
            <CustomTextInfo textLabel={sintoma.title} textValue={sintoma.ptos + ' ptos'} icon={{name:'edit', type:'feather'}} />
          </Pressable>
        )
    ) 
};



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#B3D9DA", "#F6DF7F"]}
          style={styles.linearGradient}
        >
          <Card containerStyle={styles.cardContainer} key={1}>
            <Card.Title
              style={{
                alignItems: "center",
                alignContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.fontTitles}>Sintomas Actuales</Text>
            </Card.Title>
            <Card.Divider />
              {renderSintomasActuales(SintomaState.ultimoSintoma)}
          </Card> 
          <View
            style={{
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <CustomButton
              style={{backgroundColor: "#009EA2",width: "40%",}}
              onPressFunction={() => {
                alert("Guardado");
                navigation.navigate("Dashboard");
              }}
              title="Guardar"
            />
            <CustomButton
              style={{backgroundColor: "#004da2",width: "40%"}} 
              onPressFunction={() => {
                navigation.navigate("Sintomas");
              }}
              title="Agregar sintoma"
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
