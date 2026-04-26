import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    color: "#ffffff",
  },
  headerContainer: {
    alignItems: "center",
  },
  title: {
    width: 300,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  intro: {
    width: 300,
    fontSize: 18,
    marginVertical: 10,
  },
  buttonsContainer: {
    textAlign: "center",
    marginTop: 20,
    width: 300,
  },
  social: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  socialIcons: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%', 
  },
  socialItem: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#004b29",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: 250,
  },
  icon: {
    width: 32,
    height: 32,
  },
  socialText: {
    color: "#004b29",
    fontSize: 16,
    marginLeft: 10, 
    fontWeight: '500',
  },
  footerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
   switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  switchText: {
    marginRight: 10,
    fontSize: 18,
  },
});
