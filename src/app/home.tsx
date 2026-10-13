import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { commonStyles } from '@/styles/commonStyles';
import { homeStyles } from '@/styles/homeStyles';
import { uiStyles } from '@/styles/uiStyles';

const serviceTypes = [
  { label: 'Economy', price: '$8' },
  { label: 'Comfort', price: '$12' },
  { label: 'Premium', price: '$18' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={homeStyles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.userName}>Aisha</Text>
      </View>

      <ScrollView style={homeStyles.scrollContainer} contentContainerStyle={styles.content}>
        <View style={styles.locationCard}>
          <Text style={styles.label}>Where to?</Text>
          <TextInput placeholder="Pickup location" style={styles.locationInput} />
          <TextInput placeholder="Drop-off location" style={styles.locationInput} />
        </View>

        <View style={styles.mapCard}>
          <View style={styles.dashedMap} />
          <View style={styles.pickupDot} />
          <View style={styles.dropoffDot} />
        </View>

        <View style={styles.serviceRow}>
          {serviceTypes.map((option) => (
            <Pressable key={option.label} style={styles.serviceOption}>
              <Text style={styles.serviceLabel}>{option.label}</Text>
              <Text style={styles.servicePrice}>{option.price}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={() => router.push('/ride' as any)}>
          <Text style={styles.primaryButtonText}>Book now</Text>
        </Pressable>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Trips</Text>
        <Text style={styles.navItem}>Wallet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 18,
    backgroundColor: '#facc15',
  },
  greeting: {
    fontSize: 14,
    color: '#374151',
  },
  userName: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  content: {
    padding: 18,
    paddingBottom: 80,
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  locationInput: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 10,
    fontSize: 15,
  },
  mapCard: {
    marginTop: 18,
    backgroundColor: '#eff6ff',
    borderRadius: 18,
    overflow: 'hidden',
    height: 190,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  dashedMap: {
    flex: 1,
    backgroundColor: '#e0f2fe',
    borderWidth: 2,
    borderColor: '#bfdbfe',
    borderStyle: 'dashed',
  },
  pickupDot: {
    position: 'absolute',
    left: '28%',
    top: '32%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#16a34a',
    borderWidth: 4,
    borderColor: '#fff',
  },
  dropoffDot: {
    position: 'absolute',
    right: '30%',
    bottom: '26%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ef4444',
    borderWidth: 4,
    borderColor: '#fff',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    gap: 12,
  },
  serviceOption: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  serviceLabel: {
    fontSize: 13,
    color: '#111827',
    fontWeight: '600',
  },
  servicePrice: {
    marginTop: 4,
    color: '#6b7280',
    fontSize: 12,
  },
  primaryButton: {
    marginTop: 22,
    backgroundColor: '#111827',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '600',
  },
});
