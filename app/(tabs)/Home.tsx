import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(29.2, 9.56, 255)', 'rgb(242.63, 242, 249.78)', 'rgb(42.22, 10.01, 240.12)']}
        style={styles.div}>
        {/* <Image style={styles.fordLogo} source={require('./ford-logo.svg')} /> */}
      </LinearGradient>

      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  div: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 1000,
    width: 1000,
    position: 'absolute',
  },
});
