import React, { useEffect, useRef } from 'react';
import { Alert, Animated, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import ONGCard from '../components/OngCard';

const ONGS = [
  {
    id: '1',
    nome: 'Green Future',
    causa: 'Meio Ambiente',
    imagem: require('../../assets/images/ong1.png'),
    descricao: 'ONG focada em sustentabilidade ambiental.',
    localizacao: 'São Paulo - SP',
    contato: '(11) 99999-1111',
    cor: '#DFF7E2',
    icone: '🌱',
  },

  {
    id: '2',
    nome: 'Educa Mais',
    causa: 'Educação',
    imagem: require('../../assets/images/ong2.png'),
    descricao: 'Projeto educacional para crianças.',
    localizacao: 'Rio de Janeiro - RJ',
    contato: '(21) 98888-2222',
    cor: '#E0E7FF',
    icone: '📚',
  },

  {
    id: '3',
    nome: 'Vida Plena',
    causa: 'Saúde',
    imagem: require('../../assets/images/ong3.png'),
    descricao: 'Promove acesso à saúde básica.',
    localizacao: 'Belo Horizonte - MG',
    contato: '(31) 97777-3333',
    cor: '#FFE4E6',
    icone: '💙',
  },
];

export default function ExplorarScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderONGItem = ({ item }: { item: typeof ONGS[0] }) => (
    <TouchableOpacity
      style={[styles.ongCard, { backgroundColor: item.cor }]}
      activeOpacity={0.8}
      onPress={() =>
        Alert.alert(
          item.nome,
          `${item.descricao}\n\n📍 ${item.localizacao}\n📞 ${item.contato}`
        )
      }
    >
      <Image
        source={item.imagem}
        style={styles.ongImage}
      />

      <View style={styles.cardInfo}>
        <Text style={styles.ongNome}>{item.nome}</Text>

        <Text style={styles.ongCause}>
          {item.causa}
        </Text>

        <Text style={styles.ongLocation}>
          📍 {item.localizacao}
        </Text>
      </View>

      <View style={styles.arrowBtn}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <Text style={styles.title}>Explorar ONGs</Text>

      <FlatList
        data={ONGS}
        keyExtractor={(item) => item.id}
        renderItem={renderONGItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#005CFF',

    marginTop: 20,
    marginBottom: 24,
  },

  listContent: {
    paddingBottom: 20,
  },

  ongCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,
    borderRadius: 22,

    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 5,
  },

  ongImage: {
    width: 75,
    height: 75,

    borderRadius: 18,

    resizeMode: 'cover',

    marginRight: 16,

    backgroundColor: '#FFFFFF',
  },

  cardInfo: {
    flex: 1,
  },

  ongNome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  ongCause: {
    fontSize: 15,
    color: '#005CFF',
    marginTop: 4,
    fontWeight: '600',
  },

  ongLocation: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },

  ongDescription: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 6,
  },

  arrowBtn: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#EFF6FF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowText: {
    fontSize: 24,
    color: '#005CFF',
    fontWeight: 'bold',
  },
});