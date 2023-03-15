import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { styles } from "../styles";
import { ListItem, Avatar, Icon } from '@rneui/themed';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, height:'80%' }}>
      <DrawerContentScrollView {...props}>
        {/* Avatar y nombre de perfil */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: '5%',
          }}
        >
          <Avatar
            rounded
            source={require("../img/avatar-default.png")}
            size="large"
            onPress={() => props.navigation.navigate("Account")}
          />
          <Text style={[styles.fontTitles, {margin: 10}]} onPress={() => props.navigation.navigate("Account")}>{'[ACA VA EL USUARIO]'}</Text>
        <View style={{borderBottomWidth: 1, width: '50%', borderBottomColor: '#4271A4' }}></View>
        </View>

        {/* Lista de botones */}
        <DrawerItem
          icon={() => (
            <Icon
              name="home"
              type="font-awesome"
              color="#009EA2"
              iconProps={{ size: 20 }}
            />
          )}
          label="Inicio"
          onPress={() => props.navigation.navigate("Dashboard")}
        />
        <DrawerItem
          icon={() => (
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#009EA2"
              iconProps={{ size: 20 }}
            />
        //       <Image
        //         style={{width:20, height:20, tintColor: '#009EA2'}}
        //   source={require('../icons/48-favorite-heart-solid.webp')}
        // />
          )}
          label="Sintomas"
          onPress={() => props.navigation.navigate("SintomasActuales")}
        />
        <DrawerItem
          icon={() => (
            <Icon
              name="cog"
              type="font-awesome"
              color="#009EA2"
              iconProps={{ size: 20 }}
            />
          )}
          label="Configuraciones"
          onPress={() => props.navigation.navigate("Dashboard")}
        />
          <DrawerItem
          icon={() => (
            <Icon
              name="home"
              type="font-awesome"
              color="#009EA2"
              iconProps={{ size: 20 }}
            />
          )}
          label="Pruebas de componentes"
          onPress={() => props.navigation.navigate("Pruebas")}
        />

      </DrawerContentScrollView>

      {/* Boton para cerrar sesión */}
      <View style={{alignItems: "center"}}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
              // left: "50%",
            },
            styles.button,
          ]}
          onPress={() => auth.signOut()}
        >
          <Text style={styles.textButton}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;
