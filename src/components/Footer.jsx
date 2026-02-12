import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../../constants/Colors';

const NAV_LINKS = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Produits', id: 'produits' },
  { label: 'A Propos', id: 'apropos' },
  { label: 'Contact', id: 'contact' },
];

const PRODUCT_LINKS = [
  { label: 'Gibbse', id: 'produits' },
  { label: 'Rosaces', id: 'produits' },
  { label: 'Plaques de Platre', id: 'produits' },
  { label: 'Accessoires', id: 'produits' },
];

export default function Footer({ onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const styles = getStyles(isMobile);

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logoRow}
          onPress={() => onNavigate?.('accueil')}
        >
          <Image
            source={require('../../assets/platreH.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.brandDescription}>
          {"Votre partenaire de confiance pour le platre et les produits de decoration d'interieur de qualite premium."}
        </Text>

        <View style={styles.linksRow}>
          <View style={styles.linkColumn}>
            <Text style={styles.linkHeader}>Navigation</Text>
            {NAV_LINKS.map((link) => (
              <TouchableOpacity
                key={link.label}
                onPress={() => onNavigate?.(link.id)}
              >
                <Text style={styles.linkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.linkColumn}>
            <Text style={styles.linkHeader}>Produits</Text>
            {PRODUCT_LINKS.map((link) => (
              <TouchableOpacity
                key={link.label}
                onPress={() => onNavigate?.(link.id)}
              >
                <Text style={styles.linkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.divider} />
        <Text style={styles.copyright}>
          {"© 2026 Platrehnia. Tous droits reserves."}
        </Text>
      </View>
    </View>
  );
}

const getStyles = (isMobile) =>
  StyleSheet.create({
    section: {
      backgroundColor: COLORS.primary,
      width: '100%',
    },
    container: {
      paddingVertical: isMobile ? 32 : 64,
      paddingHorizontal: isMobile ? 20 : 48,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    logoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: 200,
      height: 60,
      borderRadius : 10,
    },
    brandDescription: {
      ...FONTS.sansRegular,
      fontSize: 13,
      lineHeight: 22,
      color: 'rgba(247, 244, 240, 0.6)',
      marginTop: 12,
      maxWidth: 280,
    },
    linksRow: {
      flexDirection: 'row',
      gap: isMobile ? 24 : 48,
      marginTop: isMobile ? 20 : 32,
    },
    linkColumn: {
      flex: 1,
    },
    linkHeader: {
      ...FONTS.sansSemiBold,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 3,
      color: 'rgba(247, 244, 240, 0.4)',
      marginBottom: 14,
    },
    linkText: {
      ...FONTS.sansRegular,
      fontSize: 14,
      color: 'rgba(247, 244, 240, 0.7)',
      marginBottom: 10,
    },
    divider: {
      height: 1,
      backgroundColor: 'rgba(247, 244, 240, 0.1)',
      marginTop: isMobile ? 20 : 32,
      marginBottom: 20,
    },
    copyright: {
      ...FONTS.sansRegular,
      fontSize: 11,
      color: 'rgba(247, 244, 240, 0.4)',
      textAlign: 'center',
  },
});
