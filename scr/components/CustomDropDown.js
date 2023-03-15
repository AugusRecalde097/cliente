import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";


const CustomDropDown = ({ data = [], value = {}, onSelect = () => {} }) => {
  const [showOption, setShowOption] = useState(false);

    const onSelectItem = (item) => {
     
      onSelect(item);
      setShowOption(false);

      //console.log(showOption);
    }
    
  return (
    
    <View>
      <TouchableOpacity 
      style={styles.dropDownStyle} 
      active0pacity={0.8}
        onPress={()=> setShowOption(!showOption)}
      >
        <Text style={styles.text}>{!!value ? value?.name : `Seleccionar`}</Text>
      </TouchableOpacity>
      {showOption && (
        <View>
          {data.map((val, i) => {
            return (
            <TouchableOpacity 
              key={String(i)}
              onPress={() => onSelectItem(val)}
              >
                <Text style={styles.text} >{val.name}</Text> 
      </TouchableOpacity>);
          })}
        </View>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  dropDownStyle: {
    backgroundColor: "#009EA2",
    padding: 8,
    borderTopLeftRadius : 6,
    borderTopRightRadius : 6,
    minHeight: 42,
    justifyContent: "center",
  },
  text:{
    color:"#ffff",
    backgroundColor: "#009EA2",
    padding: 8,
    minHeight: 42,
  }
});

export default CustomDropDown;
