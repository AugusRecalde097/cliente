import React, { useState } from "react";
import { Card, Icon } from '@rneui/themed';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ActivityIndicator,
  ScrollView,
  Picker,
} from "react-native";
import { styles } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Input, ListItem } from '@rneui/themed';

const ScreenContainer = () => {
  const listaSintomas = [
    {
      id: 1,
      name: "Visión doble",
      subtitle: "Mirada lateral derecha",
      instruccion: "Aguantar la mirada hacia el lateral derecho durante 60 segundos",
      linearGradientColors: ["#FF9800", "#F44336"],
    },
    {
      id: 2,
      name: "Visión doble",
      subtitle: "Mirada lateral izquierda",
      instruccion: "Aguantar la mirada hacia el lateral izquierdo durante 60 segundos",
      linearGradientColors: ["#3F51B5", "#2196F3"],
    },
    {
      id: 3,
      name: "Ptosis",
      subtitle: "Mirada hacia arriba",
      instruccion: "Aguantar la mirada durante 60 segundos",
      linearGradientColors: ["#FFD600", "#FF9800"],
    },
    {
      id: 4,
      name: "Deglución",
      subtitle: "Ingesta de alimentos",
      instruccion:
        "Tomar medio vaso de agua, y observar si se produce alguna tos o aclaramiento de la garganta",
      linearGradientColors: ["#4CAF50", "#8BC34A"],
    },
    {
      id: 5,
      name: "Inicio de Disartria",
      subtitle: "Lenguaje despues de contar",
      instruccion: "Contar hasta el número 50 y tener en cuenta cuanto es capaz de contar para medir la resistencia",
      linearGradientColors: ["#F44336", "#E91E63"],
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [visibleInfo, setvisibleInfo] = React.useState({
    display: "flex",
    show: true,
    id: 0,
  });

  const mostrarInfoSintoma = (id) => {
    setExpanded(!expanded);
    setvisibleInfo({
      display: "flex",
      show: true,
      id: id - 1,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#B3D9DA", "#F6DF7F"]}
          style={styles.linearGradient}
        > 
        <View style={{position: 'relative', top: '10%', flex: 1}}>
          <Card containerStyle={[styles.cardContainer]}>
            {/* <Card.Title><Icon name="activity" size={20} type='feather' color='#009EA2' />  <Text style = {{fontSize: 18}}>Agregar Sintoma</Text></Card.Title> */}
           
              <ListItem.Accordion
                content={
                  <ListItem.Content>
                    <ListItem.Title>
                      {listaSintomas[visibleInfo.id].name}
                    </ListItem.Title>
                  </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => {
                  setExpanded(!expanded);
                }}
              >
                {listaSintomas.map((Item) => {
                  return (
                    <ListItem
                      key={Item.id}
                      onPress={() => {
                        mostrarInfoSintoma(Item.id);
                      }}
                      bottomDivider
                    >
                      <ListItem.Content>
                        <ListItem.Title>{Item.name}</ListItem.Title>
                        <ListItem.Subtitle>{Item.subtitle}</ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  );
                })}
              </ListItem.Accordion>
            
          </Card>
          {visibleInfo.show ? (
            <Card containerStyle={[styles.cardContainer]}>
              <Card.Title containerStyle={{ justifyContent: "space-evenly" }}>
                <Icon
                  name="clipboard"
                  size={20}
                  type="feather"
                  color="#009EA2"
                />{" "}
                <Text style={styles.fontTitles}> Item a evaluar </Text>
              </Card.Title>
              <Card.Divider />
              <View style={{flexDirection: 'column'}}>
              <Text
            
                style={[
                  styles.fontTitles,
                  { position: "relative", fontWeight: "bold" },
                ]}
              >
                {listaSintomas[visibleInfo.id].name}
              </Text>
              <Text
                style={[
                  styles.fontTitles,
                  {paddingLeft:5}
                ]}
              >
                {listaSintomas[visibleInfo.id].subtitle}
              </Text>
              </View>
              <Text>{listaSintomas[visibleInfo.id].instruccion}</Text>
            </Card>
          ) : null}
        </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});

export default ScreenContainer;
