import React, { useState, useEffect } from "react";
import styles from "./helpers/getStyles";
import { Text, View, ScrollView } from "react-native";
import generateButtons from "./helpers/generateButtons";

export default function App() {
  const [data, setData] = useState({
    calString: "",
    result: "",
    autoResize: 60,
  });

  useEffect(() => {
    let size = data.calString.length > 9 ? 40 : 60;
    if (size !== data.autoResize) setData({ ...data, autoResize: size });
  }, [data.calString.length]); // resize calString when digits in calString exceed 10

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ transform: [{ scaleX: -1 }] }}
          >
            <Text
              numberOfLines={1}
              style={{ ...styles.calString, fontSize: data.autoResize }}
            >
              {data.calString}
            </Text>
          </ScrollView>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ transform: [{ scaleX: -1 }] }}
          >
            <Text style={styles.result}>{data.result}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.body}>{generateButtons({ ...data }, setData)}</View>
    </View>
  );
}
