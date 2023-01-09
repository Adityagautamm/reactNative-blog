import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogpost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogpost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lableStyle: { fontSize: 20, marginBottom: 5, marginLeft: 5 },
});

export default CreateScreen;
