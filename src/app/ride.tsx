import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { rideStyles } from '@/styles/rideStyles';

const rideOptions = [
  { name: 'Economy', eta: '3 min', price: '$8.50', tint: '#fbbf24' },
  { name: 'Comfort', eta: '5 min', price: '$12.00', tint: '#60a5fa' },
  { name: 'Premium', eta: '8 min', price: '$18.50', tint: '#a78bfa' },
  { name: 'XL', eta: '10 min', price: '$22.00', tint: '#34d399' },
];

export default function RideSelectionScreen() {
  const router = useRouter();

  return (
    <View style={rideStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose a ride</Text>
        <Text style={styles.subtitle}>Your pickup area is ready</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {rideOptions.map((option) => (
          <Pressable key={option.name} style={styles.optionCard}>
            <View style={[styles.iconWrap, { backgroundColor: option.tint }]}>
              <Text style={styles.iconText}>R</Text>
            </View>

            <View style={styles.optionInfo}>
              <Text style={styles.optionName}>{option.name}</Text>
              <Text style={styles.optionMeta}>{option.eta} away</Text>
            </View>

            <Text style={styles.optionPrice}>{option.price}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Back</Text>
        </Pressable>

        <Pressable style={styles.primaryButton} onPress={() => router.push('/rider' as any)}>
          <Text style={styles.primaryButtonText}>Confirm ride</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 6,
    color: '#6b7280',
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 120,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
  optionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  optionName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  optionMeta: {
    marginTop: 4,
    color: '#6b7280',
    fontSize: 13,
  },
  optionPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  cancelText: {
    color: '#374151',
    fontWeight: '700',
  },
  primaryButton: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#facc15',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#111827',
    fontWeight: '700',
  },
});
