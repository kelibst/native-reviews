import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleText: {
        fontFamily: 'Nunito-regular',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      marginVertical: 20,
    },
    modalContent: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
     
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000", 
      minWidth: "80%",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    formContainer: {
      width: "100%",
    },
    formInput: {
      borderWidth: 1,
      borderColor: "#ddd",
      padding: 10,
      fontSize: 18,
      borderRadius: 10,
      marginBottom: 10,
      width: "100%",
      shadowOffset: {
        width: 0,
        height: 2
      },
    },
    button: {
      borderRadius: 120,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#333",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  