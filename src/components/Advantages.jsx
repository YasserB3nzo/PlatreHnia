import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Award, Truck, Shield, Heart } from 'lucide-react';
import { COLORS, FONTS } from '../../constants/Colors';

const ADVANTAGES = [
  {
    icon: 'award',
    title: 'Qualite Premium',
    description:
      'Nos produits sont selectionnes avec le plus grand soin pour garantir une qualite superieure et une durabilite exceptionnelle.',
  },
  {
    icon: 'truck',
    title: 'Livraison Rapide',
    description:
      'Un service de livraison fiable et rapide pour que vos projets avancent sans interruption.',
  },
  {
    icon: 'shield',
    title: 'Garantie & Fiabilite',
    description:
      'Tous nos produits sont garantis. Nous nous engageons sur la qualite et la conformite de chaque article.',
  },
  {
    icon: 'heart',
    title: 'Accompagnement Expert',
    description:
      "Notre equipe vous conseille et vous accompagne pour trouver les solutions les mieux adaptees a vos besoins.",
  },
];

export default function Advantages({ onLayout }) {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const styles = getStyles(isMobile);

  return (
    <View style={styles.section} onLayout={onLayout}>
      <View style={styles.header}>
        <Text style={styles.badge}>Nos Engagements</Text>
        <Text style={styles.heading}>Pourquoi choisir Platrehnia</Text>
      </View>

      <View style={styles.grid}>
        {ADVANTAGES.map((item) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.iconCircle}>
              {item.icon === 'award' && <Award size={22} color={COLORS.accent} />}
              {item.icon === 'truck' && <Truck size={22} color={COLORS.accent} />}
              {item.icon === 'shield' && <Shield size={22} color={COLORS.accent} />}
              {item.icon === 'heart' && <Heart size={22} color={COLORS.accent} />}
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const getStyles = (isMobile) =>
  StyleSheet.create({
    section: {
      backgroundColor: COLORS.secondary,
      paddingVertical: isMobile ? 40 : 80,
      paddingHorizontal: isMobile ? 16 : 48,
    },
    header: {
      alignItems: 'center',
      marginBottom: isMobile ? 24 : 56,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
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
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: isMobile ? 12 : 24,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    card: {
      backgroundColor: COLORS.card,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 4,
      padding: isMobile ? 20 : 32,
      alignItems: 'center',
      flex: 1,
      minWidth: isMobile ? '45%' : 280,
    },
    iconCircle: {
      width: isMobile ? 42 : 52,
      height: isMobile ? 42 : 52,
      borderRadius: 26,
      backgroundColor: COLORS.accentLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      ...FONTS.serifSemiBold,
      fontSize: isMobile ? 14 : 17,
      color: COLORS.cardForeground,
      marginTop: isMobile ? 10 : 16,
      textAlign: 'center',
    },
    cardDescription: {
      ...FONTS.sansRegular,
      fontSize: isMobile ? 12 : 13,
      lineHeight: isMobile ? 18 : 22,
    color: COLORS.mutedForeground,
    marginTop: 10,
    textAlign: 'center',
  },
});
