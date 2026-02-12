import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from 'react-native';
import { Phone, Mail, MapPin, Truck, Factory } from 'lucide-react';
import { COLORS, FONTS } from '../../constants/Colors';

const CONTACT_INFO = [
  {
    icon: 'phone',
    label: 'Telephone',
    value: '05-24-62-57-62 / 06-68-67-68-06',
    action: () => Linking.openURL('tel:+212668676806'),
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'contact@platrehnia.com',
    action: () => Linking.openURL('mailto:contact@platrehnia.com'),
  },
  {
    icon: 'map-pin',
    label: 'SOCIÉTÉ PLATRE HNIA SIEGE',
    value: 'ZN°111 LOTISSEMENT JAOUHARA ROUTE HADHRARA . SAFI',
    action: null,
  },
  {
    icon: 'truck',
    label: 'USINE',
    value: 'KM06 ROUTE SEBT GZOULA. SAFI',
    action: null,
  },
];

export default function Contact({ onLayout }) {
  const { width } = useWindowDimensions();
  const styles = getStyles(width);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    // TODO: Connect to your backend API
    console.log('Form submitted:', form);
  };

  return (
    <View style={styles.section} onLayout={onLayout}>
      <Text style={styles.badge}>Contact</Text>
      <Text style={styles.heading}>Parlons de votre projet</Text>
      <Text style={styles.subtitle}>
        Contactez-nous pour toute demande de devis, conseil technique ou
        information sur nos produits.
      </Text>

      <View style={styles.infoGrid}>
        {CONTACT_INFO.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.infoCard}
            onPress={item.action}
            disabled={!item.action}
            activeOpacity={item.action ? 0.7 : 1}
          >
            <View style={styles.infoIconCircle}>
              {item.icon === 'phone' && <Phone size={18} color={COLORS.accent} />}
              {item.icon === 'mail' && <Mail size={18} color={COLORS.accent} />}
              {item.icon === 'map-pin' && <MapPin size={18} color={COLORS.accent} />}
              {item.icon === 'truck' && <Factory size={18} color={COLORS.accent} />}
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Demande de devis</Text>
        <Text style={styles.formSubtitle}>
          Remplissez le formulaire ci-dessous et nous vous repondrons dans les
          plus brefs delais.
        </Text>

        <View style={styles.formRow}>
          <View style={styles.formFieldHalf}>
            <Text style={styles.label}>Nom complet</Text>
            <TextInput
              style={styles.input}
              placeholder="Votre nom"
              placeholderTextColor={COLORS.mutedForeground}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </View>

          <View style={styles.formFieldHalf}>
            <Text style={styles.label}>Telephone</Text>
            <TextInput
              style={styles.input}
              placeholder="Votre numero"
              placeholderTextColor={COLORS.mutedForeground}
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Votre adresse email"
            placeholderTextColor={COLORS.mutedForeground}
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Decrivez votre projet..."
            placeholderTextColor={COLORS.mutedForeground}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={form.message}
            onChangeText={(text) => setForm({ ...form, message: text })}
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitBtnText}>Envoyer la demande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getStyles = (width) =>
  StyleSheet.create({
    section: {
      backgroundColor: COLORS.background,
      paddingVertical: 80,
      paddingHorizontal: width > 768 ? 48 : 24,
    },
    badge: {
      ...FONTS.sansSemiBold,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 5,
      color: COLORS.accent,
      marginBottom: 16,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    heading: {
      ...FONTS.serifBold,
      fontSize: width > 768 ? 42 : 32,
      lineHeight: width > 768 ? 52 : 42,
      color: COLORS.foreground,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    subtitle: {
      ...FONTS.sansRegular,
      fontSize: 18,
      lineHeight: 30,
      color: COLORS.mutedForeground,
      marginTop: 16,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    infoGrid: {
      flexDirection: width > 768 ? 'row' : 'column',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 40,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    infoCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 16,
      backgroundColor: COLORS.card,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 4,
      flex: 1,
      minWidth: width > 768 ? '48%' : '100%',
      padding: 20,
    },
    infoIconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: COLORS.accentLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoText: {
      flex: 1,
    },
    infoLabel: {
      ...FONTS.sansSemiBold,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: COLORS.mutedForeground,
    },
    infoValue: {
      ...FONTS.sansMedium,
      fontSize: 14,
      color: COLORS.cardForeground,
      marginTop: 4,
    },
    formCard: {
      backgroundColor: COLORS.card,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 16,
      padding: 32,
      marginTop: 48,
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
    },
    formTitle: {
      ...FONTS.serifSemiBold,
      fontSize: 28,
      color: COLORS.cardForeground,
    },
    formSubtitle: {
      ...FONTS.sansRegular,
      fontSize: 16,
      color: COLORS.cardForeground,
      marginTop: 8,
    },
    formRow: {
      flexDirection: width > 768 ? 'row' : 'column',
      gap: 16,
      marginTop: 16,
    },
    formField: {
      marginTop: 16,
    },
    formFieldHalf: {
      flex: 1,
    },
    label: {
      ...FONTS.sansSemiBold,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: COLORS.mutedForeground,
      marginBottom: 6,
    },
    input: {
      ...FONTS.sansRegular,
      fontSize: 14,
      color: COLORS.foreground,
      borderWidth: 1,
      borderColor: COLORS.input,
      backgroundColor: COLORS.background,
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    textarea: {
      height: 100,
      paddingTop: 12,
    },
    submitBtn: {
      backgroundColor: COLORS.accent,
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: 24,
    },
    submitBtnText: {
      ...FONTS.sansSemiBold,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: COLORS.accentForeground,
    },
  });
