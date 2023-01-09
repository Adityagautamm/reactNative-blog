import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => {
    blogPost.id === navigation.getParam("id");
  });

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return <BlogPostForm onSubmit={(title, content) => {}} />;
};

export default EditScreen;
