import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandler } from 'expo';
const { Swipeable } = GestureHandler;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "FFF",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  text: {
    color: "#4a4a4a",
    fontSize: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    marginLeft: 10,
    backgroundColor: "#e4e4e4"
  }
});

export const Separator = () => <View style={styles.separator} />

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  <Swipeable>
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
  </Swipeable>
);

export default ListItem;