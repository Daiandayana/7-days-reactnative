import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../../src/constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TaskFlow!</Text>
      <Text style={styles.subtitle}>Your productivity app starts here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONT_SIZE.xlarge,
    fontWeight: "bold",
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.textSecondary,
  },
});
