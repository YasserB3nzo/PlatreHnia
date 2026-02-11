import React, { useRef } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Advantages from '../components/Advantages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomeTab() {
  const scrollViewRef = useRef(null);
  const sectionRefs = useRef({});

  const registerSection = (id, layout) => {
    sectionRefs.current[id] = layout;
  };

  const handleNavigate = (sectionId) => {
    const layout = sectionRefs.current[sectionId];
    if (layout && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: layout.y, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar onNavigate={handleNavigate} />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Hero
          onNavigate={handleNavigate}
          onLayout={(e) => registerSection('accueil', e.nativeEvent.layout)}
        />
        <Products
          onLayout={(e) => registerSection('produits', e.nativeEvent.layout)}
        />
        <About
          onLayout={(e) => registerSection('apropos', e.nativeEvent.layout)}
        />
        <Advantages
          onLayout={(e) => registerSection('avantages', e.nativeEvent.layout)}
        />
        <Contact
          onLayout={(e) => registerSection('contact', e.nativeEvent.layout)}
        />
        <Footer onNavigate={handleNavigate} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
});
