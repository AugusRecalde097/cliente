import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenContainer = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <LinearGradient
                    colors={['#B3D9DA', '#F6DF7F']}
                    style={style.linearGradient}
                >
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

    }
})

export default ScreenContainer;