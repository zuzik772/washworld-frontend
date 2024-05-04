import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FavouritesScreen = () => {
  const [readyBoxHeight, setReadyBoxHeight] = useState(10);

  return (
    <>
      <View style={{ height: "33%", width: "100%", position: "relative" }}>
        <Image
          style={styles.fullWidthImage}
          source={{
            uri: "https://washworld.dk/_next/image?url=https%3A%2F%2Fwashworld-wordpress-production.storage.googleapis.com%2Fwp-content%2Fuploads%2F2021%2F03%2F28140259%2FWashWorld_lokation-e1618300360483.jpg&w=828&q=65",
          }}
        />
        <View
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setReadyBoxHeight(height);
          }}
          className="absolute bottom-0 right-0 bg-primaryGreen py-1 z-10"
        >
          <View className="z-20 px-2">
            <Text className="text-lg">Ready</Text>
          </View>
          <View
            className={`absolute w-full right-3 bg-primaryGreen z-0 `}
            style={{
              height: readyBoxHeight,
              transform: [{ skewX: "-20deg" }],
            }}
          />
        </View>
      </View>
      <View
        className="w-9/12 h-1 bg-primaryGreen"
        style={{
          transform: [{ skewX: "-20deg" }],
        }}
      ></View>
    </>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  fullWidthImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
