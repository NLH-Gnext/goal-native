import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalsItem from "./components/GoalsItem";
import GoalsInput from "./components/GoalsInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevCoureseGoals) => [
      ...prevCoureseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((prevCoureseGoals) =>
      prevCoureseGoals.filter((goal) => goal.id !== id)
    );
  };
  return (
    <View style={styles.appContainer}>
      <GoalsInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalsItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
