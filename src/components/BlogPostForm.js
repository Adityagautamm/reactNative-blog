import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.lableStyle}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.lableStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
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

export default BlogPostForm;
