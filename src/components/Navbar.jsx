import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  useWindowDimensions,
  Animated,
  Pressable,
} from 'react-native';
// Use only Lucide to keep it simple and avoid loading extra font files
import { Menu, Phone, X } from 'lucide-react'; 
import { COLORS, FONTS } from '../../constants/Colors';

const NAV_LINKS = [
  { label: 'ACCUEIL', id: 'accueil' },
  { label: 'PRODUITS', id: 'produits' },
  { label: 'A PROPOS', id: 'apropos' },
  { label: 'POURQUOI NOUS', id: 'avantages' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Navbar({ onNavigate }) {
  const { width } = useWindowDimensions();
  const styles = getStyles(width);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const handleCall = () => {
    Linking.openURL('tel:+212000000000'); // Note: Updated to Morocco +212
    closeMenu();
  };
  
  const handleNav = (id) => {
    onNavigate?.(id);
    closeMenu();
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: Platform.OS !== 'web', // FIXED SYNTAX
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: Platform.OS !== 'web', // FIXED SYNTAX
    }).start(() => setIsMenuOpen(false));
  };

  const isMobile = width < 768;

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.logoRow}
            onPress={() => handleNav('accueil')}
          >
            <Image
              source={require('../../assets/Platrehnia.jpg')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {isMobile ? (
            <TouchableOpacity onPress={openMenu}>
              <Menu size={24} color={COLORS.foreground} />
            </TouchableOpacity>
          ) : (
            <>
              <View style={styles.navLinks}>
                {NAV_LINKS.map((link) => (
                  <TouchableOpacity
                    key={link.id}
                    onPress={() => handleNav(link.id)}
                    style={styles.navLink}
                  >
                    <Text style={styles.navLinkText}>{link.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity style={styles.callBtn} onPress={handleCall}>
                <Phone size={16} color={COLORS.accentForeground} />
                <Text style={styles.callBtnText}>Appelez-nous</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      
      {isMobile && isMenuOpen && (
        <View style={styles.overlay}>
          <Pressable style={styles.modalBackdrop} onPress={closeMenu} />
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
              <X size={24} color={COLORS.accentForeground} />
            </TouchableOpacity>
            {NAV_LINKS.map((link) => (
              <TouchableOpacity
                key={link.id}
                onPress={() => handleNav(link.id)}
                style={styles.modalLink}
              >
                <Text style={styles.modalLinkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCallBtn}
              onPress={handleCall}
            >
              <Phone size={16} color={COLORS.accentForeground} />
              <Text style={styles.callBtnText}>Appelez-nous</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
}

const getStyles = (width) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative', // Changed from absolute to prevent overlap issues on web
      backgroundColor: COLORS.background,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
      zIndex: 100,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: width > 768 ? 48 : 24,
      paddingVertical: 16,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    logoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    logo: {
      width: width > 768 ? 200 : 160,
      height: width > 768 ? 60 : 50,
      borderRadius: 4,
    },
    navLinks: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 32,
      flex: 1,
      justifyContent: 'center',
    },
    navLink: {
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    navLinkText: {
      ...FONTS.sansMedium,
      fontSize: 13,
      letterSpacing: 1.5,
      color: COLORS.mutedForeground,
      textTransform: 'uppercase',
    },
    callBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: COLORS.accent,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    callBtnText: {
      ...FONTS.sansSemiBold,
      fontSize: 14,
      color: COLORS.accentForeground,
    },
    overlay: {
      position: 'fixed', // Changed from absolute to ensure it covers the whole screen on web
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
    },
    modalBackdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: COLORS.accent,
      width: 300,
      padding: 24,
      paddingTop: 80,
      boxShadow: '-5px 0 15px rgba(0,0,0,0.1)', // Web specific shadow
    },
    closeButton: {
      position: 'absolute',
      top: 24,
      right: 24,
    },
    modalLink: {
      paddingVertical: 16,
      width: '100%',
      alignItems: 'flex-start',
    },
    modalLinkText: {
      ...FONTS.sansSemiBold,
      fontSize: 16,
      color: COLORS.accentForeground,
      textTransform: 'uppercase',
    },
    modalCallBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: COLORS.accentForeground,
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
  });