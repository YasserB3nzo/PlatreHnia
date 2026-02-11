import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../../constants/Colors';

const STATS = [
  { value: '15+', label: "ANNEES D'EXPERIENCE" },
  { value: '2000+', label: 'PROJETS REALISES' },
  { value: '500+', label: 'CLIENTS SATISFAITS' },
];

export default function About({ onLayout }) {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  // Use useMemo to prevent re-creating styles on every render
  const styles = useMemo(() => getStyles(width, isDesktop), [width, isDesktop]);

  return (
    <View style={styles.section} onLayout={onLayout}>
      <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/Apropos.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Text Section */}
        <View style={styles.textContent}>
          <Text style={styles.badge}>A PROPOS</Text>
          <Text style={styles.heading}>
            Un savoir-faire reconnu depuis plus de 15 ans
          </Text>
          <Text style={styles.paragraph}>
            Platrehnia est nee de la passion pour l'art du platre et la decoration interieure. Depuis notre creation, nous nous engageons a fournir des produits d'une qualite exceptionnelle, alliant tradition artisanale et innovation.
          </Text>
          <Text style={styles.paragraph}>
            Notre equipe d'experts vous accompagne dans chaque etape de votre projet, du choix des materiaux jusqu'a la realisation finale.
          </Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            {STATS.map((stat, index) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const getStyles = (width, isDesktop) =>
  StyleSheet.create({
    section: {
      backgroundColor: COLORS.primary,
      paddingVertical: isDesktop ? 80 : 48,
      paddingHorizontal: isDesktop ? 24 : 20,
    },
    container: {
      // Mobile = column (stack vertical), Desktop = row (side by side)
      flexDirection: isDesktop ? 'row' : 'column',
      gap: isDesktop ? 36 : 32, 
      maxWidth: 1200,
      alignSelf: 'center',
      width: '100%',
      alignItems: isDesktop ? 'center' : 'stretch',
    },
    imageWrapper: {
      // FIX: Removed 'flex: 0'. We use 'undefined' for mobile so it respects the image height.
      flex: isDesktop ? 0.45 : undefined, 
      width: isDesktop ? '45%' : '100%',
      backgroundColor: COLORS.primary,
    },
    image: {
      width: '100%',
      height: isDesktop ? 400 : 280, // Made slightly taller for mobile
      borderRadius: 4,
    },
    textContent: {
      // FIX: Same here, removed 'flex: 0' to prevent collapsing
      flex: isDesktop ? 0.55 : undefined,
      width: isDesktop ? '55%' : '100%',
    },
    badge: {
      ...FONTS.sansSemiBold,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 5,
      color: COLORS.accent,
      marginBottom: isDesktop ? 24 : 16,
    },
    heading: {
      ...FONTS.serifBold,
      fontSize: isDesktop ? 42 : 28,
      lineHeight: isDesktop ? 52 : 36,
      color: COLORS.primaryForeground,
      marginBottom: 16,
    },
    paragraph: {
      ...FONTS.sansRegular,
      fontSize: isDesktop ? 18 : 15,
      lineHeight: isDesktop ? 30 : 24,
      color: 'rgba(247, 244, 240, 0.85)',
      marginTop: isDesktop ? 24 : 12,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: isDesktop ? 48 : 32,
      gap: isDesktop ? 32 : 12,
    },
    statItem: {
      flex: 1,
      alignItems: isDesktop ? 'flex-start' : 'center',
    },
    statValue: {
      ...FONTS.serifBold,
      fontSize: isDesktop ? 48 : 28,
      color: COLORS.accent,
      marginBottom: 4,
    },
    statLabel: {
      ...FONTS.sansMedium,
      fontSize: isDesktop ? 11 : 9,
      textTransform: 'uppercase',
      letterSpacing: 1,
      textAlign: 'center',
      color: 'rgba(247, 244, 240, 0.6)',
    },
  });