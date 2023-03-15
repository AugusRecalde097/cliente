import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Input, Icon } from '@rneui/themed';
import { textWrapper } from "../utils/globalFunctions";
import { SIZES, COLORS } from "../theme";

const CustomButton = ({textLabel = '', textValue= '', icon = {name:"chevron-right", type:"font-awesome", color:"#E5E5E5" }}) => { 
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        height: 30,
      }}
    >
      <View
        style={{
          height: 30,
          justifyContent: "center",

        }}
      >
        <Text style={{fontSize:SIZES.fontNormal}} > {textWrapper(textLabel, 17)} </Text>
      </View>
      
      <View
        style={{
          height: 30,
          flex:1,
          marginRight: 0,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
         <Text style={{fontSize:SIZES.fontNormal}} >
          {textWrapper(textValue, 17)}
         </Text>
         <Icon 
              name= {icon.name}
              type={icon.type}
              color= {icon.color}
              iconProps={{ size: 20 }}
              style={{ alignSelf:'center', marginLeft:10 }}
            />
      </View>

    </View>
  );
};

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
    marginBottom: 50,
    width: "60%",
    height: 35,
    backgroundColor: "#009EA2",
  },
});

export default CustomButton;
