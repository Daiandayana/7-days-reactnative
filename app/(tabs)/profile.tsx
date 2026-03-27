import { Text, View } from "react-native";
import LogoutButton from "../components/LogoutButton";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile Screen</Text>
      <LogoutButton />
    </View>
  );
}
