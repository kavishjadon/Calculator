import { StyleSheet } from "react-native";

const colors = {
  background: "#000",
  outerButton: "#272727",
  innerButton: "#191919",
  focus: "#d9802e",
  text: "#c9c9c9",
  result: "#808080",
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-around",
    alignContent: "flex-end",
  },
  button: {
    color: "white",
    minHeight: 65,
    marginHorizontal: 5,
    marginVertical: 7,
    minWidth: 75,
    borderRadius: 20,
    backgroundColor: colors.innerButton,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 32,
    color: colors.text,
  },
  calString: {
    transform: [{ scaleX: -1 }],
    fontFamily: "sans-serif-thin",
    fontSize: 60,
    color: colors.text,
  },
  result: {
    transform: [{ scaleX: -1 }],
    textAlign: "right",
    fontFamily: "sans-serif-thin",
    fontSize: 30,
    color: colors.result,
  },
  flip: {
    transform: [{ rotateY: "180deg" }],
  },
  focus: {
    backgroundColor: colors.focus,
  },
  focusText: {
    color: colors.focus,
  },
  outerButton: {
    backgroundColor: colors.outerButton,
  },
});
