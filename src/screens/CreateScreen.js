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

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogpost } = useContext(BlogContext);

  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput value={title} onChange={(text) => setTitle(text)} />
      <Text>Enter Content</Text>
      <TextInput value={content} onChange={(text) => setContent(text)} />
      <Button title="Add Blog" onPress={() => addBlogpost(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {},
  lableStyle: {},
});

export default CreateScreen;
