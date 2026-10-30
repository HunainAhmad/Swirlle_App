import { useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const roleOptions = [
  {
    id: 'rider',
    title: 'Ride as a passenger',
    description:
      'Book a trip instantly and travel with comfort and safety.',
    image: require('../assets/images/customer.jpg'),
  },
  {
    id: 'driver',
    title: 'Drive and earn',
    description:
      'Accept nearby customer requests and grow your earnings.',
    image: require('../assets/images/rider.jpg'),
  },
];

export default function RoleSelectionScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Switch to a two-column layout on wider screens.
  const isWideScreen = width >= 900;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.content,
          { paddingHorizontal: width < 400 ? 18 : 28 },
        ]}
      >
        {/* Swirlle branding */}
        <View style={styles.brandContainer}>
          <Text accessibilityRole="header" style={styles.brand}>
            swirlle
          </Text>
          <Text style={styles.tagline}>
            Move your way
          </Text>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Choose your role
          </Text>
          <Text style={styles.subtitle}>
            How would you like to use Swirlle?
          </Text>
        </View>

        <View
          style={[
            styles.cardsContainer,
            isWideScreen && styles.cardsRow,
          ]}
        >
          {roleOptions.map((role) => (
            <Pressable
              key={role.id}
              accessibilityRole="button"
              accessibilityLabel={`${role.title}. ${role.description}`}
              onPress={() => router.push('/auth' as any)}
              style={({ pressed }) => [
                styles.card,
                isWideScreen && styles.wideCard,
                pressed && styles.cardPressed,
              ]}
            >
              <Image
                source={role.image}
                style={[
                  styles.cardImage,
                  { height: isWideScreen ? 220 : 175 },
                ]}
                resizeMode="cover"
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {role.title}
                </Text>
                <Text style={styles.cardDescription}>
                  {role.description}
                </Text>
                <Text style={styles.cardAction}>
                  Continue {'→'}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Text style={styles.footer}>
          Safe journeys start with Swirlle.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1120,
    alignSelf: 'center',
    paddingTop: 36,
    paddingBottom: 36,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 34,
  },
  brand: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1.5,
    color: '#111827',
  },
  tagline: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
    letterSpacing: 0.5,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
  },
  cardsContainer: {
    width: '100%',
    gap: 22,
  },
  cardsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    flexShrink: 1,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  wideCard: {
    flex: 1,
    width: undefined,
  },
  cardPressed: {
    opacity: 0.88,
  },
  cardImage: {
    width: '100%',
    backgroundColor: '#E2E8F0',
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    gap: 8,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 26,
    color: '#111827',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
  },
  cardAction: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 4,
  },
  footer: {
    marginTop: 28,
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 13,
  },
});
