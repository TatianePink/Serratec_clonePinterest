import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Meu App - Todos os direitos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333', // Cor de fundo do footer
    paddingVertical: 10, // Espaçamento vertical
    alignItems: 'center', // Centraliza o texto
    position: 'absolute', // Fixa o footer no fundo
    bottom: 0, // Coloca na parte inferior
    width: '100%', // Garante que o footer ocupe toda a largura
  },
  footerText: {
    color: '#fff', // Cor do texto
    fontSize: 14, // Tamanho da fonte
  },
});

export default Footer;
