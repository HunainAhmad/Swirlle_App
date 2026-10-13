import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo_t.png')} style={styles.logo} />
      <Text style={styles.appName}>Swirlle</Text>
      <Text style={styles.tagline}>Ride smarter. Arrive faster.</Text>

      <Pressable style={styles.primaryButton} onPress={() => router.push('/role' as any)}>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 18,
  },
  appName: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1f2937',
    letterSpacing: 0.5,
  },
  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  primaryButton: {
    marginTop: 32,
    width: '100%',
    backgroundColor: '#facc15',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
});
