import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Container = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <LinearGradient
                    colors={['#B3D9DA', '#F6DF7F']}
                    style={style.linearGradient}
                >
                    <Image
                        style={style.logo}
                        source={require('../img/logo.png')}
                    />

                    <View style={{ top: '55%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center', }} >
                        <Pressable
                            style={style.button}
                            onPress={() =>
                                props.navigation.navigate("LogIn")}
                        >
                            <Text style={style.textButton}>Iniciar Sesión</Text>
                        </Pressable>
                        <Pressable
                            style={style.button}
                            onPress={() =>
                                props.navigation.navigate("CreateUser")}
                        >
                            <Text style={style.textButton}>Crear nuevo usuario</Text>
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
        position: 'absolute',

  transform: [{ translateY: 50 }, { translateX: 50 }],
        bottom: '68.84%',
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