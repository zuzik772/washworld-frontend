import { Text, Box } from "@gluestack-ui/themed";

import { StyleSheet, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";
const MapScreen = () => {
	return (
		<Layout>
			<Text>MapScreen</Text>
			<Box
				backgroundColor="$primaryGreen"
				padding={10}
				justifyContent="center"
				alignItems="center"
			>
				<Text color="$secondaryOrange" fontWeight="$bold">
					BOX
				</Text>
			</Box>
		</Layout>
	);
};
export default MapScreen;
const styles = StyleSheet.create({});
