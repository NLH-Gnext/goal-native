import { Pressable, StyleSheet, Text, View } from "react-native";
const GoalsItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#jjj" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed})=>pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalsItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "violet",
    borderRadius: 14,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem:{
    opacity : 0.4
  }
});