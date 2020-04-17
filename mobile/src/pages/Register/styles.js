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

  cadastroContainer: {
    marginTop: 75,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },
  cadastroButton: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cadastroButtonText: {
    marginRight: 18,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  cadastro: {
    marginTop: 0,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
    alignItems: "center",
  },

  input: {
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
});
