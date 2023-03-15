import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const CustomButton = ({color, onPressFunction, style, title }) => {
    return (
        <Pressable
            onPress={onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00000050' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : color },
                styles.button,
                { ...style }
            ]}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        width: 267,
        height: 16,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 13,
        lineHeight: 16,
        textAlign: "center",
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 11,
        marginBottom: 10,

        height: 35,
        
    },
})

export default CustomButton;