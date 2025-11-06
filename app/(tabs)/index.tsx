import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>

      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={homeStyles.container}>
        <Text style={homeStyles.header}>TODO ADHD</Text>
        <Text>Marwan</Text>

        <Link href="/_sitemap">Press me</Link>

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    
    </LinearGradient>
  );
}






// const createStyles = (colors:ColorScheme) => {

//   const styles = StyleSheet.create({
//     container: {
//       flex:1,
//       gap: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: colors.bg,
//     },
//     header: {
//       fontSize: 48,
//     },
//   });

//   return styles;
// };
