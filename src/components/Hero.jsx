import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { ArrowRight } from 'lucide-react';
import { COLORS, FONTS } from '../../constants/Colors';

export default function Hero({ onNavigate, onLayout }) {
  const { width } = useWindowDimensions();
  const styles = getStyles(width);

  return (
    <View onLayout={onLayout}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.badge}>EXCELLENCE & SAVOIR-FAIRE</Text>
          <Text style={styles.heading}>
            {"L'art du platre\nau service de\nvos espaces"}
          </Text>
          <Text style={styles.description}>
            {"Platrehnia vous propose une gamme complete de platre et produits de decoration d'exception. Qualite premium pour des resultats qui transforment vos interieurs."}
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => onNavigate?.('produits')}
            >
              <Text style={styles.primaryBtnText}>DECOUVRIR NOS PRODUITS</Text>
              <ArrowRight size={18} color={COLORS.accentForeground} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => onNavigate?.('contact')}
            >
              <Text style={styles.secondaryBtnText}>NOUS CONTACTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const getStyles = (width) =>
  StyleSheet.create({
    background: {
      minHeight: width > 768 ? 600 : 500,
      justifyContent: 'center',
      paddingTop: 80,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(30, 26, 23, 0.75)',
    },
    content: {
      paddingHorizontal: width > 768 ? 48 : 24,
      paddingVertical: 80,
      zIndex: 1,
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
      marginBottom: 24,
    },
    heading: {
      ...FONTS.serifBold,
      fontSize: width > 768 ? 56 : 40,
      lineHeight: width > 768 ? 68 : 50,
      color: COLORS.primaryForeground,
    },
    description: {
      ...FONTS.sansRegular,
      fontSize: width > 768 ? 18 : 16,
      lineHeight: width > 768 ? 30 : 26,
      color: 'rgba(247, 244, 240, 0.85)',
      marginTop: 24,
      maxWidth: 650,
    },
    buttonRow: {
      flexDirection: width > 768 ? 'row' : 'column',
      gap: 16,
      marginTop: 40,
      alignItems: width > 768 ? 'center' : 'stretch',
    },
    primaryBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      backgroundColor: COLORS.accent,
      borderRadius: 4,
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    primaryBtnText: {
      ...FONTS.sansSemiBold,
      fontSize: 13,
      letterSpacing: 1.5,
      color: COLORS.accentForeground,
    },
    secondaryBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'rgba(247, 244, 240, 0.4)',
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    secondaryBtnText: {
      ...FONTS.sansSemiBold,
      fontSize: 13,
      letterSpacing: 1.5,
      color: COLORS.primaryForeground,
    },
  });
