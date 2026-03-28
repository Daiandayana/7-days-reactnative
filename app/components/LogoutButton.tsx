import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
<<<<<<< HEAD
import { BORDER_RADIUS, COLORS, SPACING } from "../constants/theme";
=======
import { useAuth } from "../context/AuthContext";
>>>>>>> day-2-navigation

export default function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.error,
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    marginTop: SPACING.lg,
  },
  text: {
    color: COLORS.background,
    fontWeight: "bold",
  },
});
