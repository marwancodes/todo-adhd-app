import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const SafeScreen = ({children}: {children: ReactNode}) => {
    const insets = useSafeAreaInsets();
  // console.log('SafeScreen insets:', insets);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {children}
    </View>
  )
}

export default SafeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});