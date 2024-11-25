import { View, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import logo from "../../assets/logotry.png";

export default function DrawerContent(props) {
  const router = useRouter();
  const year = new Date().getFullYear();
  const { top, bottom } = useSafeAreaInsets();

  const handleLogout = async () => {
    router.replace("/");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: top,
        }}
      >
        {/* Logo Section */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20, // Reduce gap between logo and items
          }}
        >
          <Image
            source={logo}
            style={{
              width: "70%", // Adjust to fit nicely in the drawer
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
          />
        </View>

        {/* Drawer Items */}
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: 10 }}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>

      {/* Footer Section */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10 + bottom, // Adjust padding to reduce space
        }}
      >
        <Text style={{ fontSize: 12 }}>
          Copyright &copy; {year}. All rights reserved
        </Text>
      </View>
    </View>
  );
}
