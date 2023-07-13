import { View, Text, StyleSheet, Pressable } from "react-native";
function TaskItem(props) {
  return (
    <View style={styles.taskItemElement}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        onPress={props.onDeleteTask.bind(this, props.item.id)}
      >
        <Text style={styles.taskItemElementText}>
          {props.index + 1}:{props.item.text}
        </Text>
        <Text style={styles.taskItemElementText}>{props.item.id}</Text>
      </Pressable>
    </View>
  );
}
export default TaskItem;

const styles = StyleSheet.create({
  taskItemElement: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#5f1aca",
  },
  taskItemElementText: {
    color: "#ffffff",
    padding: 10,
  },
});
