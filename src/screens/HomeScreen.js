import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Epstein didn't kill himself</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Images Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
