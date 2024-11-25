import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Settings = () => {
  const [emailUpdates, setEmailUpdates] = useState({
    owner: false,
    assignee: false,
    reporter: true,
    mentions: true,
    assigning: false,
  });

  const [emailFormat, setEmailFormat] = useState("HTML");

  const toggleCheckbox = (key) => {
    setEmailUpdates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleEmailFormat = (format) => {
    setEmailFormat(format);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get email updates when:</Text>
      {Object.entries(emailUpdates).map(([key, value]) => (
        <TouchableOpacity
          key={key}
          style={styles.optionContainer}
          onPress={() => toggleCheckbox(key)}
        >
          <View
            style={[
              styles.checkbox,
              value && { backgroundColor: "#6650A4", borderColor: "#6650A4" },
            ]}
          />
          <Text style={styles.optionText}>
            {key === "owner" && "You’re the owner"}
            {key === "assignee" && "You’re the assignee"}
            {key === "reporter" && "You’re the reporter"}
            {key === "mentions" && "Someone mentions you"}
            {key === "assigning" && "Someone is assigning you"}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          You may also receive other email notifications your admin configured.{" "}
          <Text style={styles.link}>Learn more</Text>
        </Text>
      </View>

      <Text style={styles.title}>Email format</Text>
      <View style={styles.radioGroup}>
        {["HTML", "Text"].map((format) => (
          <TouchableOpacity
            key={format}
            style={styles.radioContainer}
            onPress={() => handleEmailFormat(format)}
          >
            <View
              style={[
                styles.radio,
                emailFormat === format && { backgroundColor: "#6650A4" },
              ]}
            />
            <Text style={styles.optionText}>{format}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#1e1e2c",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    color: "#fff",
  },
  infoContainer: {
    backgroundColor: "#2a2a40",
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
  },
  infoText: {
    fontSize: 12,
    color: "#bbb",
  },
  link: {
    color: "#6650A4",
    textDecorationLine: "underline",
  },
  radioGroup: {
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#6650A4",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Settings;
