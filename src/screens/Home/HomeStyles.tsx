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
    textAlign: "left",
    width: 300,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  intro: {
    textAlign: "left",
    width: 300,
    fontSize: 16,
  },
  buttonsContainer: {
    textAlign: "center",
    marginTop: 20,
    width: 300,
  },
  social: {
    fontSize: 22,
    fontWeight: "bold",
  },
   switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 18,
    marginRight: 40,
  },
  socialIcons: {
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
    marginVertical: 4,
    width: 250,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  socialText: {
    color: "#004b29",
    fontSize: 16,
<<<<<<< HEAD
    marginLeft: 12, 
    fontWeight: '400',
=======
    marginLeft: 10, 
    fontWeight: '500',
    flex: 1,
>>>>>>> 018895b3f855c1f1bb0faa31767abc22ebf0f350
  },
  footerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
