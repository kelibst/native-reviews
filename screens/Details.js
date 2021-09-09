import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "../shared/card";
import Stars from 'react-native-stars';
import { globalStyles } from "../styles.js/global";
import { MaterialIcons } from "@expo/vector-icons";

const Details = ({ navigation }) => {

  const deleteReview = navigation.getParam("delReview")
  const item = navigation.getParam("item")
  return (
    <View>
      <Card>
        <Text style={styles.ratingTitle }>{item.title}</Text>
        <Text style={styles.ratingBody}>{item.body}</Text>
        <View style={{ alignItems: "center" }}>
          <Stars
            display={navigation.getParam('item').rating}
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require("../assets/images/starFilled.png")}
            emptyStar={require("../assets/images/starEmpty.png")}
          />
        </View>
       <Button title="delete" onPress={() => {deleteReview(item.key)}}/>
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
