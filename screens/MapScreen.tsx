import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
      <Box>
        <Box
          alignSelf="center" // bg="primary.500"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          bg={["red.400", "blue.400"]}
        >
          <Text>BOX</Text>
        </Box>
      </Box>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
