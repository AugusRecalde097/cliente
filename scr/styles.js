import { SIZES, COLORS } from "./theme";
import { StyleSheet } from "react-native";
//import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",

    flex: 1,
  },
  panelChart: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",

    position: "relative",
    width: SIZES.width - 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  panelHistorial: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 19,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    position: "relative",
    width: SIZES.width - 80,
    height: 211,
  },
  logo: {
    position: "absolute",
    //width: 109,
    height: 100,
    resizeMode: "center",
    alignSelf: "center",
    top: "3%",
    width: 211,
  },
  textHelp: {
    position: "relative",
    height: 33,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#655C34",
  },
  TextInput: {
    fontSize: 16,
  },
  inputGroup: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,

    position: "relative",
    width: "100%",
    height: "20%",
  },

  buttonCustom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 11,
    marginBottom: 50,
    width: "60%",
    height: 35,
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
  textButton: {
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'rgba(1,1,1,0.5)'
  },
  modalView: {
    margin: 20,
    width:'85%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  cardContainer: {

    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  fontTitles:{
    fontSize: 16, color: '#4271A4'
  },
  buttonClose: {
    backgroundColor: "#009EA2",
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default { styles };
