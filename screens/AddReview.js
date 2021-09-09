import { Formik } from "formik";
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles.js/global";
import Stars from "react-native-stars";

const AddReview = ({ addReviews }) => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "0" }}
        onSubmit={(values) => {
          addReviews(values);
        }}
      >
        {(props) => (
          <View style={globalStyles.formContainer}>
            <TextInput
              style={globalStyles.formInput}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.formInput}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <View style={globalStyles.ratingCont}>
              <Stars
                display={typeof(props.values.rating) == "string" ? Number(props.values.rating) : props.values.rating}
                spacing={8}
                update={
                  (val) => {
                   props.setFieldValue("rating", val)
                  }  
                }
                count={5}
                starSize={30}
                fullStar={require("../assets/images/starFilled.png")}
                emptyStar={require("../assets/images/starEmpty.png")}
              />
            </View>
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddReview;
