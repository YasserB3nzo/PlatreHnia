import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { ArrowUpRight } from 'lucide-react';
import { COLORS, FONTS } from '../../constants/Colors';

const PRODUCTS = [
  {
    title: 'Gypse Ennaka - PGC',
    description:
      "Un plâtre gros de construction semi-hydraté d'une pureté supérieure à 92%. Conçu pour le moulage de précision, les rosaces et les sculptures ornementales.",
    image: require('../../assets/Gibbs.png'),
    resizeMode: 'cover',
  },
  {
    title: 'Moulage Ennaka',
    description:
      "Rosaces de plafond et ornements decoratifs qui apportent une touche d'elegance classique a vos espaces.",
    image: require('../../assets/Moulage.png'),
    resizeMode: 'contain',
  },
];

export default function Products({ onLayout }) {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const styles = getStyles(width, isMobile);

  return (
    <View style={styles.section} onLayout={onLayout}>
      <View style={styles.header}>
        <Text style={styles.badge}>Nos Produits</Text>
        <Text style={styles.heading}>
          Une gamme complete pour tous vos projets
        </Text>
        <Text style={styles.subtitle}>
          Decouvrez notre selection de produits de platre, alliant qualite
          superieure et finition impeccable.
        </Text>
      </View>

      <View style={styles.cardsGrid}>
        {PRODUCTS.map((product) => (
          <TouchableOpacity
            key={product.title}
            style={styles.card}
            activeOpacity={0.85}
          >
            <Image
              source={product.image}
              style={styles.cardImage}
              resizeMode={product.resizeMode || 'cover'}
            />
            <View style={styles.cardBody}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>{product.title}</Text>
                <ArrowUpRight size={18} color={COLORS.accent} />
              </View>
              <Text style={styles.cardDescription}>{product.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const getStyles = (width, isMobile) =>
  StyleSheet.create({
    section: {
      backgroundColor: COLORS.background,
      paddingVertical: isMobile ? 40 : 80,
      paddingHorizontal: isMobile ? 16 : 48,
    },
    header: {
      marginBottom: isMobile ? 24 : 48,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
      alignItems: 'center',
    },
    badge: {
      ...FONTS.sansSemiBold,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 5,
      color: COLORS.accent,
      marginBottom: 16,
    },
    heading: {
      ...FONTS.serifBold,
      fontSize: isMobile ? 26 : 42,
      lineHeight: isMobile ? 34 : 52,
      color: COLORS.foreground,
      textAlign: 'center',
    },
    subtitle: {
      ...FONTS.sansRegular,
      fontSize: isMobile ? 14 : 18,
      lineHeight: isMobile ? 22 : 30,
      color: COLORS.mutedForeground,
      marginTop: 16,
      textAlign: 'center',
      maxWidth: 700,
    },
    cardsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: isMobile ? 16 : 24,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: COLORS.card,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: COLORS.border,
      overflow: 'hidden',
      flex: 1,
      minWidth: isMobile ? '100%' : 320,
      maxWidth: isMobile ? '100%' : 440,
    },
    cardImage: {
      width: '100%',
      height: isMobile ? 180 : 280,
    },
    cardBody: {
      padding: isMobile ? 16 : 32,
    },
    cardTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    cardTitle: {
      ...FONTS.serifSemiBold,
      fontSize: isMobile ? 18 : 24,
      color: COLORS.cardForeground,
    },
    cardDescription: {
      ...FONTS.sansRegular,
      fontSize: isMobile ? 13 : 16,
      lineHeight: isMobile ? 22 : 28,
      color: COLORS.mutedForeground,
    marginTop: 12,
  },
});
