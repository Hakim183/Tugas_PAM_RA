import React from "react";
import { plusCounter, minusCounter } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, View, StyleSheet, StatusBar, Text,} from "react-native";

const counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={styles.view}>
      <StatusBar
            animated
            barStyle="dark-content"
            backgroundColor="transparent"
          />
      <TouchableOpacity
        style={styles.TCHO1}
        onPress={() => dispatch(minusCounter(counter))}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.angka}>{counter}</Text>
      <TouchableOpacity
        style={styles.TCHO1}
        onPress={() => dispatch(plusCounter(counter))}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: '#121212',
  },
  angka: {
    fontSize: 60,
    marginLeft: 20,
    marginRight: 20,
    color: '#f0f0f0',
    fontWeight: "bold",
  },
   text: {
    fontSize: 50,
    color: "#f0f0f0",
    fontWeight: "bold",
  },
  TCHO1: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#cc3333",
  },
});

export default counter;
