import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend1", age: "23" },
    { name: "friend2", age: "25" },
    { name: "friend3", age: "51" },
    { name: "friend4", age: "32" },
    { name: "friend5", age: "61" },
    { name: "friend6", age: "12" },
    { name: "friend7", age: "53" },
    { name: "friend8", age: "22" },
    { name: "friend9", age: "14" }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
