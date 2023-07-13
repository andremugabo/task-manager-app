import { View, Text, StyleSheet } from "react-native";
function TaskItem(props) {
  return (
    <View style={styles.taskItemElement}>
      <Text style={styles.taskItemElementText}>
        {props.index + 1}:{props.item.text}
      </Text>
      <Text style={styles.taskItemElementText}>{props.item.id}</Text>
    </View>
  );
}
export default TaskItem;

const styles = StyleSheet.create({
  taskItemElement: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#5f1aca",
  },
  taskItemElementText: {
    color: "#ffffff",
  },
});
