import { Formik } from "formik";
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles.js/global";

const AddReview = ({addReviews}) => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
            addReviews(values)
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

            <TextInput
              style={globalStyles.formInput}
              placeholder="Review rating"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType='numeric'
            />

            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddReview;
