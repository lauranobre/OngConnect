import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>

        {/* TOPO - lugar da logo */}
        <Image
          style={styles.imagem}
          source={require('../assets/images/logo.png')} 
        />

        {/* MEIO - lugar dos textos */}
        <Text style={styles.tituloPrincipal}>Bem-vindo a OngConnect!</Text>
        <Text style={styles.textoComum}>Nós somos a ponte digital que liga a sua vontade de ajudar às necessidades das ONGs da comunidade.</Text>

        {/* FINAL - lugar dos botões */}
        <TouchableOpacity 
          style={styles.buttonLogin} 
          onPress={() => console.log('Navegar para a tela de Login')} 
        >
          <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonProjeto} 
          onPress={() => console.log('Navegar para a lista de Projetos/Mapa')} 
        >
          <Text style={styles.buttonProjetoText}>Conhecer Projetos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F4F7FA", 
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textoComum: {
    fontSize: 18, 
    color: "#1E293B", 
    textAlign: "center",
    marginBottom: 30, 
  },
  tituloPrincipal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#005CFF", 
    textAlign: "center",
    marginBottom: 10,
  },
  imagem: {
    width: 400,
    height: 150,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: '#005CFF', 
    paddingVertical: 14, 
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
    width: '85%', 
    alignItems: 'center',
  },
  buttonProjeto: {
    backgroundColor: '#005CFF', 
    paddingVertical: 14, 
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
    width: '85%', 
    alignItems: 'center',
  },
  buttonLoginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Sublinhado
  },
  buttonProjetoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  },
);