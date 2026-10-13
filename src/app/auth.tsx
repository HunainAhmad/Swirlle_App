import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { authStyles } from '@/styles/authStyles';

export default function AuthScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Image source={require('../assets/images/logo_t.png')} style={authStyles.logo} />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in with your phone number</Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="+1 234 567 890"
          style={styles.input}
        />

        <Pressable style={styles.primaryButton} onPress={() => router.push('/home' as any)}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    color: '#6b7280',
    fontSize: 15,
  },
  formCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    fontSize: 16,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: '#facc15',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
  },
});
