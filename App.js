import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalsItem from "./components/GoalsItem";
import GoalsInput from "./components/GoalsInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevCoureseGoals) => [
      ...prevCoureseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((prevCoureseGoals) =>
      prevCoureseGoals.filter((goal) => goal.id !== id)
    );
  };
  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add a Goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalsInput
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
            visible={modalIsVisible}
          />
        )}
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
    </>
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
