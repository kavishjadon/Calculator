import React from "react";
import { Text, TouchableHighlight } from "react-native";
import handlePress from "./handlePress";
import buttons from "./buttons.json";
import styles from "./getStyles";

export default function (data, setData) {
  return buttons.map((el, i) => {
    let focus = i === buttons.length - 1 ? styles.focus : {};
    let firstTwo = i < 2 ? styles.focusText : {};
    let outerButton = i < 4 || (i + 1) % 4 === 0 ? styles.outerButton : {};
    let flip = el == "➝" ? styles.flip : {};

    return (
      <TouchableHighlight
        style={{ ...styles.button, ...outerButton, ...focus }}
        onPressIn={function () {
          handlePress(el, data, setData);
        }} // not using arrow function for performance reason
        key={el}
      >
        <Text style={{ ...styles.text, ...firstTwo, ...flip }}>{el}</Text>
      </TouchableHighlight>
    );
  });
}
