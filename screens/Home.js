import React from "react";
import { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles.js/global";
import { MaterialIcons } from "@expo/vector-icons";
import AddReview from "./AddReview";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Legend of Zelda Ocarina of time",
      rating: 5,
      body: "very awesome",
      key: "1",
    },
    { title: "Super Mario", rating: 5, body: "very awesome", key: "2" },
    { title: "Evil Twin", rating: 5, body: "very awesome", key: "3" },
  ]);
 
  
  const [modalVisible, setModalVisible] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalVisible(false)
  }

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };


  const delReview = (key) => {
    let nReviews =  reviews?.filter(rev => rev.key !== key)
    navigation.navigate("Home")
    setReviews(nReviews)
   showToastWithGravityAndOffset(      "You just deleted a review!",)
  }
 
  return (
    <View>
      <View style={globalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            showToastWithGravityAndOffset("Review not added!")
            setModalVisible(!modalVisible);
          }}
        >
          <View style={globalStyles.modalContent}>
           
            <View style={globalStyles.modalView}> 
            <Pressable
              style={[globalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={globalStyles.textStyle}>
                <MaterialIcons name="close" size={20} />
              </Text>
            </Pressable>
              <AddReview addReviews={addReview}/>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[globalStyles.button, globalStyles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={globalStyles.textStyle}>
            <MaterialIcons name="add" size={28} />
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", {item, delReview})}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
