import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addNewTask(newTask) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: newTask, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.mainContainer}>
      {/*AddTask*/}
      <AddTask addNewTask={addNewTask} />
      <View style={styles.taskListSection}>
        {taskList.length > 0 ? (
          <Text style={styles.taskOverviewTitle}>Your Task!</Text>
        ) : (
          <Text></Text>
        )}

        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return <TaskItem item={item} index={index} />;
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
