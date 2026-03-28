import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

function HeaderLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    router.push("/(auth)/login");
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
      <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Logout</Text>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerRight: () => <HeaderLogout /> }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
