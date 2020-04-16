import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    marginTop: 150,
    alignItems: "center",
  },

  title: {
    fontSize: 48,
    color: "#e02041",
  },

  loginContainer: {
    marginTop: 75,
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },

  entrada: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFF",
    borderColor: "black",
  },

  actions: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    marginTop: 0,
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  actiontext: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
