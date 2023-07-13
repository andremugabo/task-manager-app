import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
function AddTask(props) {
  const [task, setTask] = useState("");

  function taskInputHandler(inputTask) {
    setTask(inputTask);
  }

  function AddTask() {
    props.addNewTask(task);
    setTask("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        onChangeText={taskInputHandler}
        style={styles.inputBOx}
        placeholder="Enter task details"
      />
      <Button title="Add Task" onPress={AddTask} />
    </View>
  );
}
export default AddTask;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    // backgroundColor: "green",
  },
  inputBOx: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    marginRight: 3,
    borderRadius: 15,
    color: "#fff",
  },
});
