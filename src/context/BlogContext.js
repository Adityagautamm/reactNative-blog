import { ActionSheetIOS } from "react-native";
import createDataContext from "./createDataContext";
import { EvilIcons } from "@expo/vector-icons";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_Blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_Blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_Blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogpost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_Blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const editBlogpost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_Blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogpost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_Blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogpost, deleteBlogpost, editBlogpost },
  []
);
