import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../shared/card";
import Stars from 'react-native-stars';

const Details = ({ navigation }) => {
  return (
    <View>
      <Card>
        <Text style={styles.ratingTitle }>{navigation.getParam("title")}</Text>
        <Text style={styles.ratingBody}>{navigation.getParam("body")}</Text>
        <View style={{ alignItems: "center" }}>
          <Stars
            display={navigation.getParam('rating')}
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require("../assets/images/starFilled.png")}
            emptyStar={require("../assets/images/starEmpty.png")}
          />
        </View>
      </Card>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  ratingTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  }, 
  ratingBody: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  }
})
