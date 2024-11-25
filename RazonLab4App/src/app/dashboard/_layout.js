import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DrawerContent from "../../components/Drawer"; // Adjust path to your drawer component

const Drawer = createDrawerNavigator();

const TabsLayout = ({ navigation }) => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#6650A4" },
        headerTitleStyle: { color: "#FFF" },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="menu"
              size={24}
              color="#FFF"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
        tabBarStyle: {
          backgroundColor: "#6650A4",
          margin: 5,
          padding: 5,
          minHeight: 50,
          borderRadius: 10,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color="#FFF"
                size={20}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color="#FFF"
                size={20}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "cog" : "cog-outline"}
                color="#FFF"
                size={20}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const Dashboard = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Dashboard">
        {(props) => <TabsLayout {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default Dashboard;
