import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import errores from "../msgErrors";
import { Card, Icon } from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { styles } from "../styles";
import { COLORS, SIZES } from "../theme";
import { formatFechaBase } from "../utils/globalFunctions";
import ButtonCustom from "../components/button";
import DropDownCustom from '../components/CustomDropDown';

const Container = (props) => {
  const screenWidth = Dimensions.get("window").width;
  const mensajesErr = errores.mensajesErrores;
 
  //Estados iniciales de los datos.
  const initialState = {
    id: "",
    name: "",
    email: "",
    genero: "",
    sintomas: [],
    fecha: "",
    totalPtoSintomas: 0,
  };

  const initialHistorial = {
    historial: [],
    ultimoSintoma: [],
  }

  const [userState, setUser] = useState(initialState);
  const [historialState, setHistorial] = useState({
    historial: [],
    ultimoSintoma: [],
  });
  const [loadding, setLoadding] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const renderChart = () => {

    let sintomas = []
    let total = []
    if (sintomas.length > 0) {
      //Creo un nuevo array necesario para usarlo en el gráfico
      let chartData = sintomas.map((item) => {
        let percentage = ((item.ptos / total) * 100).toFixed(0);
        return {
          label: `${percentage} %`,
          name: item.title,
          y: parseInt(item.ptos),
          id: item.ptos,
        };
      });

      return (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Svg
            width={SIZES.width}
            height={SIZES.width - 150}
            style={{ width: "100%", height: "auto", flex: 1 }}
          >
            <VictoryPie
              standalone={false} // Android workaround
              animate={{ easing: "exp" }}
              data={chartData}
              labels={(chartData) => `${chartData.y}`}
              radius={Dimensions.get("window").width * 0.2}
              innerRadius={30}
              colorScale="qualitative"
              width={280}
              height={100}
              origin={{ y: 100 }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: "labels",
                          mutation: (props) => {
                            let categoryName = chartData[props.index].name;
                            let puntos = chartData[props.index].y;
                            alert(
                              `${categoryName.toUpperCase()} con ${puntos} puntos`
                            );
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </Svg>
        </View>
      );
    } else {
      return(
        <Card.Title>
          Aún no posee datos registrados
      </Card.Title>
      );
    }
  };

  

  // Render de la pantalla
  let dataPruebaDrop = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
  ];

  
  //Selector de dropdown
  const onSelect = (item) => {
    setSelectedItem(item);
  }





  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#B3D9DA", "#F6DF7F"]}
          style={styles.linearGradient}
        >
          <ScrollView
            contentContainerStyle={{ paddingBottom: 0 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >

            <Card containerStyle={styles.cardContainer} key={1}>
              <Card.Title
                style={{
                  alignItems: "center",
                  alignContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.fontTitles}>Sintomas actuales</Text>
              </Card.Title>
              <Card.Divider />
              {
                <Svg
                  style={{
                    flex: 1,
                    position: "relative",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  {renderChart()}
                </Svg>
              }
              <Card.Divider />
              <Card.Title>
                Puntaje total de la semana:
                {historialState.ultimoSintoma[0]?.totalPtoSintomas} puntos
              </Card.Title>
              {/* <TextInfo  /> */}
            </Card>

            <Card containerStyle={styles.cardContainer} key={2}>
              <Card.Title>
                <Text style={styles.fontTitles}>Historial de sintomas</Text>
              </Card.Title>
              <Card.Divider />
              <View style={{ position: "relative" }}>
                {/*renderCategoryList()*/}
              </View>
            </Card>
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Container;
