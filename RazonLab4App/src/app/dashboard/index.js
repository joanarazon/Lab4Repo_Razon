import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import profilePic from "../../assets/Profile_pic.jpg"; // Import the image

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back, Joana 🎉</Text>
        <Text style={styles.subText}>
          there is the latest update for the last 7 days. check now
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="export" size={18} color="#6650A4" />
          <Text style={styles.buttonText}>Export</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createButton]}>
          <MaterialCommunityIcons name="plus" size={18} color="#fff" />
          <Text style={[styles.buttonText, styles.createButtonText]}>
            Create
          </Text>
        </TouchableOpacity>
      </View>

      {/* Performance Card */}
      <View style={styles.performanceCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Developer Performance</Text>
          <Text style={styles.cardLink}>See more</Text>
        </View>
        <View style={styles.cardContent}>
          <Image source={profilePic} style={styles.profilePic} />
          <View style={styles.performanceText}>
            <Text style={styles.performanceScore}>91.2%</Text>
            <Text style={styles.performanceSubText}>
              Overall Performance Score
            </Text>
          </View>
        </View>
        <Text style={styles.additionalInfo}>
          Your Client Performance score increased by 25% from last month. Pretty
          good performance!
        </Text>
      </View>

      {/* Statistics Cards */}
      <View style={styles.statisticsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>New Followers</Text>
          <Text style={styles.statValue}>2,543</Text>
          <Text style={styles.statSubText}>80% Increase in 20 Days</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Total Followers</Text>
          <Text style={styles.statValue}>12,543</Text>
          <Text style={styles.statSubText}>80% Increase from Last Month</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#666",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#6650A4",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6650A4",
  },
  createButton: {
    backgroundColor: "#6650A4",
  },
  createButtonText: {
    color: "#fff",
  },
  performanceCard: {
    backgroundColor: "#6650A4",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  cardLink: {
    fontSize: 14,
    color: "#ddd",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  performanceText: {
    flex: 1,
  },
  performanceScore: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  performanceSubText: {
    fontSize: 14,
    color: "#ddd",
  },
  additionalInfo: {
    fontSize: 14,
    color: "#fff",
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  statTitle: {
    fontSize: 14,
    color: "#333",
  },
  statValue: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    marginVertical: 8,
  },
  statSubText: {
    fontSize: 12,
    color: "#666",
  },
});

export default Dashboard;
