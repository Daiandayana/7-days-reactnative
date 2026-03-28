import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { APP_CONFIG } from "../constants/config";
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from "../constants/theme";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (
      email === APP_CONFIG.DEMO_EMAIL &&
      password === APP_CONFIG.DEMO_PASSWORD
    ) {
      await login("demo-token");
      router.replace("/");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONT_SIZE.xlarge,
    fontWeight: "bold",
    marginBottom: SPACING.xl,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    fontSize: FONT_SIZE.medium,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: "center",
    marginTop: SPACING.sm,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: FONT_SIZE.medium,
    fontWeight: "bold",
  },
  error: {
    color: COLORS.error,
    marginBottom: SPACING.sm,
    textAlign: "center",
  },
});
