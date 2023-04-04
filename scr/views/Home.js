import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = (props) => {
    const [userData, setUserData] = useState({
        id:'',
        nombre: ''
       })
    const getDatosPersona = async () => {
        // read merged item
        const currentUser = await AsyncStorage.getItem('hamburgesa')
        //console.log(currentUser);
         setUserData(JSON.parse(currentUser))
         if(userData?.id > 0){
         console.log('Cargando...');
            props.navigation.navigate("Dashboard", {id:userData.id})
        }
        
   }
   useEffect(() => {
     getDatosPersona()
   }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <LinearGradient
                    colors={['#B3D9DA', '#F6DF7F']}
                    style={style.linearGradient}
                >

                    <View style={{ 
                        flex: 2,
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center', }} >
                        <Image
                            style={style.logo}
                            source={require('../img/logo.png')}
                        />
                        <Pressable
                            style={style.button}
                            onPress={() =>
                                props.navigation.navigate("LogIn")}
                        >
                            <Text style={style.textButton}>Iniciar Sesión</Text>
                        </Pressable>
                    </View>
                </LinearGradient>

            </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%'

    },
    logo: {
        width: 247,
        height: 142,
        resizeMode: 'center',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 11,
        marginBottom: 50,
        //transform: [{ translateY: 50 }, { translateX: 50 }],
        position: 'relative',
        width: '60%',
        height: 35,
        backgroundColor: '#009EA2'
    },
    textButton: {
        position: 'absolute',
        width: 267,
        height: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFFFFF'

    },
})
export default Container