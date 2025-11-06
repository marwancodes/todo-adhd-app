import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function Index() {
  
  const {toggleDarkMode, colors} = useTheme();

  const styles = createStyles(colors);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.header}>TODO ADHD</Text>
      <Text>Marwan</Text>

      <Link href="/_sitemap">Press me</Link>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>

    </View>
  );
}

const createStyles = (colors:ColorScheme) => {

  const styles = StyleSheet.create({
    container: {
      flex:1,
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
    header: {
      fontSize: 48,
    },
  });

  return styles;
};
