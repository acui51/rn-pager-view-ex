import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useState, useEffect } from "react";

const LOAD_TIME = 100;
const INTERVAL = 25;

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + 10 >= LOAD_TIME) {
          clearInterval(interval);
        }
        return prevProgress + 10;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical">
      <View key="1" style={styles.container}>
        <Text>{progress}</Text>
        <View
          style={{
            position: "relative",
            width: 500,
            height: 16,
            backgroundColor: "white"
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 500 * (progress / LOAD_TIME),
              height: 16,
              backgroundColor: "green"
            }}
          />
        </View>
      </View>
      <View key="2" style={styles.container}>
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  pagerView: {
    flex: 1
  }
});
