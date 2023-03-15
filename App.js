// In App.js in a new project

import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./scr/views/Home.js";
import Dashboard from "./scr/views/Dashboard.js";
import LogIn from "./scr/views/LogIn.js";
import CreateUser from "./scr/views/CreateUser.js";
import SintomasScreen from './scr/views/NuevoSintoma'
import Account from "./scr/views/Account.js";
import CustomDrawer from "./scr/components/CustomDrawer.js";
import SintomasActuales from './scr/views/SintomasActuales'
import Pruebas from "./scr/views/Pruebas.js"
//import Snackbar from './scr/views/Snackbar'


const Drawer = createDrawerNavigator();
const Dimensiones = Dimensions.get('window')

function LogoTitle() {
  return (
    <View style= {{alignItems : 'center', flex:1 , width: Dimensions.get('window').width - 120 }}> 
    <Image style={{ width: 80, height: 20, flex:1, resizeMode : 'center' }} source={require("./scr/img/logo.png")} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={ props => <CustomDrawer {...props} />} >

        {/* Pantallas visibles */} 
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Inicio', headerShown: true, headerTitle: (props) => <LogoTitle {...props} />  }} />
        <Drawer.Screen name="Sintomas" component={SintomasScreen} options = {{  headerShown: true,  }}/>
        <Drawer.Screen name="Account" component={Account} options={{ title: 'Cuenta', headerShown: true,  }} />
        <Drawer.Screen name="SintomasActuales" component={SintomasActuales} options={{ title: 'Sintomas Actuales', headerShown: true}} />        
        {/* Pantallas adiccionales */}
        <Drawer.Screen name="Home" component={HomeScreen} options = {{ headerShown: false }}/>
        <Drawer.Screen name="LogIn" component={LogIn} options = {{ headerShown: false }}/>
        <Drawer.Screen name="CreateUser" component={CreateUser} options = {{ headerShown: true }}/>
        <Drawer.Screen name="Pruebas" component={Pruebas} options = {{ headerShown: true }}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
