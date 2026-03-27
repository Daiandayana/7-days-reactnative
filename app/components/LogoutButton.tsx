import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("./(auth)/login");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff3b30",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
