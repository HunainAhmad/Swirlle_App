import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { riderStyles, orderStyles } from '@/styles/riderStyles';

export default function RiderDashboardScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={riderStyles.headerContainer}>
        <Text style={{ color: '#111827', fontSize: 18, fontWeight: '700' }}>Trip in progress</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={orderStyles.container}>
          <View style={orderStyles.flexRowBase}>
            <View style={orderStyles.pickupHollowCircle} />
            <View style={styles.tripTextBlock}>
              <Text style={styles.label}>Pickup</Text>
              <Text style={styles.value}>Downtown Station</Text>
            </View>
          </View>

          <View style={orderStyles.flexRowBase}>
            <View style={orderStyles.dropHollowCircle} />
            <View style={styles.tripTextBlock}>
              <Text style={styles.label}>Dropoff</Text>
              <Text style={styles.value}>Waterfront Avenue</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.smallLabel}>Driver</Text>
              <Text style={styles.statText}>Samir</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.smallLabel}>ETA</Text>
              <Text style={styles.statText}>4 mins</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.smallLabel}>Fare</Text>
              <Text style={styles.statText}>$12</Text>
            </View>
          </View>
        </View>

        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>Your driver</Text>
          <Text style={styles.noteBody}>Black sedan • Plate #UY 412</Text>
          <Text style={styles.noteBody}>Call ahead to confirm the pickup point.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
          <Text style={styles.secondaryText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Track ride</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 110,
  },
  tripTextBlock: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  value: {
    marginTop: 4,
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    gap: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 12,
  },
  smallLabel: {
    fontSize: 11,
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  statText: {
    marginTop: 4,
    color: '#111827',
    fontWeight: '700',
  },
  noteBox: {
    marginTop: 18,
    backgroundColor: '#fff7ed',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  noteBody: {
    marginTop: 8,
    color: '#4b5563',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#374151',
    fontWeight: '700',
  },
  primaryButton: {
    flex: 2,
    backgroundColor: '#facc15',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    color: '#111827',
    fontWeight: '700',
  },
});
