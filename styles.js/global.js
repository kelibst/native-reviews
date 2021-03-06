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
    ratingCont:{
      marginVertical: 20
    },
    formContainer: {
      // width: "100%",
    },
    deBtn: {
      
    },
    formInput: {
      borderWidth: 1,
      borderColor: "#ddd",
      padding: 10,
      fontSize: 18,
      borderRadius: 10,
      marginBottom: 10,
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
      backgroundColor: "#E91E63",
      padding: 5,
      position: "absolute",
      right: 10,
      borderRadius: 100,
      top: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    btnTextStyle: {
      color: "white",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  