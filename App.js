import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

export default function App() {
  const [showNodal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  function showModalHandler() {
    setShowModal(true);
  }

  function hideModalHandler() {
    setShowModal(false);
  }

  function addNewTask(newTask) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: newTask, id: Math.random().toString() },
    ]);
    hideModalHandler();
  }

  function deleteTask(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id); //false condition item gets removed
    });
  }
  return (
    <View style={styles.mainContainer}>
      <Button title="Add new Task" color="red" onPress={showModalHandler} />
      {/*AddTask*/}
      <AddTask
        addNewTask={addNewTask}
        visible={showNodal}
        hideModal={hideModalHandler}
      />
      <View style={styles.taskListSection}>
        {taskList.length > 0 ? (
          <Text style={styles.taskOverviewTitle}>
            Your Task! to impress Munezero Ange
          </Text>
        ) : (
          <Text></Text>
        )}

        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return (
              <TaskItem item={item} index={index} onDeleteTask={deleteTask} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        {/*<ScrollView>
          {taskList.map((taskItem, index) => {
            return (
              <View style={styles.taskItemElement} key={index}>
                <Text key={index} style={styles.taskItemElementText}>
                  {index + 1}:{taskItem}
                </Text>
              </View>
            );
          })}
        </ScrollView>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#f0ee95",
  },
  taskListSection: {
    flex: 6,
    // backgroundColor: "red",
  },
  taskOverviewTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
